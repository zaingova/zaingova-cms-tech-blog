const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

// route described in login.js in /public -> creates a user
router.post("/signup", async (req, res) => {
  console.log('here');
  try {
    const userData = await User.create(req.body, {
      username: req.body.username,
      password: req.body.password,
    });

    console.log(userData);

    // saves user data to the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// route described in login.js in /public -> used to login as existing user
router.post("/login", async (req, res) => {
  try {
    // makes sure email is in database
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // validates if in the user where the emails match, the passwords match too
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // saves user data to the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// route described logout.js in /public -> logs out existing user by destroying session
router.post("/logout", (req, res) => {
  console.log(req.session.logged_in);
  console.log(req.session.logged_in);
  // if user is logged in...
  if (req.session.logged_in) {
    // destroy session
    req.session.destroy(() => {
      res.status(204).end();
    });

  } else {
    // otherwise, an error must have occured
    res.status(404).end();
  }
});

module.exports = router;
