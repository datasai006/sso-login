const router = require('express').Router();
const passport = require('passport');

router.get('/login', passport.authenticate('azuread-openidconnect'));

router.post('/openid/return',
  passport.authenticate('azuread-openidconnect', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect('http://localhost:3000');
  }
);

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('http://localhost:3000');
  });
});

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    return res.json(req.user);
  }
  res.status(401).json({ message: 'Unauthorized' });
});

module.exports = router;
