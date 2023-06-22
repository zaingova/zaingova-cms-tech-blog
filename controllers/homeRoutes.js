const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

// default home-route -> loads homepage by default (able to access while logged out)
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({ include: [{ model: User }] });
    const posts = postData.map((p) => p.get({ plain: true }));

    res.render("homepage", { posts, logged_in: req.session.logged_in });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      where: {
        id: req.params.id
      },
      include: [
        { model: User },
        { model: Comment, include: { model: User } }
      ]
    });
    const post = postData.get({ plain: true });

    console.log(post);

    res.render("singlePost", { post, logged_in: req.session.logged_in });
  } catch (err) {
    res.json(err);
  }
});

// dashboard route -> must be logged in to access
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
      where: {
        user_id: req.session.user_id,
      }
    });
    const posts = postData.map((p) => p.get({ plain: true }));

    //console.log(posts);

    res.render("dashboard", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.json(err);
  }
});

// user login route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
})

module.exports = router;
