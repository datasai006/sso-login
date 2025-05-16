require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport Serialize/Deserialize
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Passport Azure AD Strategy
passport.use(new OIDCStrategy({
  identityMetadata: `https://login.microsoftonline.com/${process.env.TENANT_ID}/v2.0/.well-known/openid-configuration`,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  responseType: 'code',
  responseMode: 'form_post',
  redirectUrl: 'http://localhost:5000/auth/openid/return',
  allowHttpForRedirectUrl: true,
  validateIssuer: false,
  passReqToCallback: false,
  scope: ['profile', 'offline_access', 'https://graph.microsoft.com/user.read']
}, function(iss, sub, profile, accessToken, refreshToken, done) {
  return done(null, profile);
}));

// Routes
app.get('/auth/login', passport.authenticate('azuread-openidconnect'));

app.post('/auth/openid/return',
  passport.authenticate('azuread-openidconnect', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.redirect('http://localhost:3000');
  }
);

app.get('/auth/user', (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ message: 'Unauthorized' });
  res.json(req.user);
});

app.get('/auth/logout', (req, res) => {
  req.logout(() => {
    res.redirect('http://localhost:3000');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
