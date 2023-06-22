const router = require("express").Router();
const { Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/:id", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_text: req.body.comment,
      date_created: Date.now(),
      post_id: parseInt(req.body.post_id),
      user_id: req.session.user_id,
    })

    console.log(commentData);

    console.log(req.body.post_id);

    //res.r;
    //res.render('singlePost', { logged_in: true });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
})

module.exports = router;