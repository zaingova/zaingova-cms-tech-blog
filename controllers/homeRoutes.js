const router = require('express').Router();
const { User } = require('../models')

router.get('/', async (req, res) => {
  try {

  } catch (err) {

  }
})

router.get('/:user_id', async (req, res) => {
  try {

  } catch (err) {

  }
})

// user login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return
  }

  res.render('login');
})

module.exports = router;