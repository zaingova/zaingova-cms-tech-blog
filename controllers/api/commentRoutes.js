const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// route for posting annew comment
router.post("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_text: req.body.comment,
      date_created: Date.now(),
      post_id: parseInt(req.body.post_id),
      user_id: req.session.user_id,
    })

    res.status(200).json(commentData);
    res.redirect(`/posts/${post_id}`);
  } catch (err) {
    res.status(500).json(err);
  }
})

// route for deleting comments
router.delete("/delete", withAuth, async (req, res) => {
  try {
    const deletedComment = await Comment.delete({
      where: {
        id: req.body.comment_id,
      }
    });

    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(500).json(err);
  }
})

// exports router
module.exports = router;