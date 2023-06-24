const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// route used for ceating posts
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create(
      {
        date_created: req.body.date_created,
        post_title: req.body.post_title,
        post_contents: req.body.post_contents,
        user_id: req.session.user_id
      }, {});

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// route used for updating comments
router.put('/update', async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.body.value },
    }
    );

    res.status(200).json(updatedPost);
    res.location.replace('dashboard');
  } catch (err) {
    res.json(err);
    console.log(err);
  }
})

// route used for deleting posts
router.delete('/delete', async (req, res) => {
  console.log(req.body.value);
  try {
    const deletedPost = Post.destroy({
      where: {
        id: req.body.value,
      }
    })

    res.status(200).json(deletedPost);
    res.location.replace('dashboard');
  } catch (err) {
    res.json(err);
  }
});

// exports router
module.exports = router;
