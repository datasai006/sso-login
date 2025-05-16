const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new OIDCStrategy({
    identityMetadata: `https://login.microsoftonline.com/${process.env.TENANT_ID}/v2.0/.well-known/openid-configuration`,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    responseType: 'code',
    responseMode: 'form_post',
    redirectUrl: 'http://localhost:5000/auth/openid/return',
    allowHttpForRedirectUrl: true,
    validateIssuer: false,
    passReqToCallback: false,
    scope: ['profile', 'email', 'openid']
  },
  async (iss, sub, profile, accessToken, refreshToken, done) => {
    let user = await User.findOne({ oid: profile.oid });
    if (!user) {
      user = await User.create({
        oid: profile.oid,
        displayName: profile.displayName,
        email: profile._json.preferred_username
      });
    }
    return done(null, user);
  })
);
