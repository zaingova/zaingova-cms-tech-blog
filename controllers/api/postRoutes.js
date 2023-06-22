const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// route described in
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/delete', async (req, res) => {
  console.log(req.body.value);
  try {
    const deletedPost = Post.destroy({
      where: {
        id: req.body.value,
      }
    })

    res.location.replace('/dashboard');
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
