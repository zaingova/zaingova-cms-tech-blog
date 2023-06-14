const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const posts = Post.findAll({
      include: User,
    });

    res.render("dashboard", { posts });
  } catch (err) {
    res.json(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const post = Post.findByPk(req.params.id, {
      include: {
        User,
        Comment,
      },
    });

    res.render("singlePost", post);
  } catch (err) {
    res.json(err);
  }
});

// dashboard route,
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const posts = Post.findAll({
      include: User,
    });

    res.render("dashboard", { posts });
  } catch (err) {
    res.json(err);
  }
});

// user login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
