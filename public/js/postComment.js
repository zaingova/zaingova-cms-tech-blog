const postCommentHandler = async (event) => {
  event.preventDefault();

  const comment = document.getElementById('comment-field').value.trim();
  const post_id = document.getElementById('post_id').innerHTML;
  console.log(comment);
  console.log(post_id);

  if (comment.length > 0) {
    const response = await fetch(`/api/comments/${post_id}`, {
      method: "POST",
      body: JSON.stringify({ comment, post_id }),
      headers: { "Content-Type": "application/json" },
    })


    if (response.ok) {
      location.reload();
      //document.location.replace(`/posts/${post_id}`);
    } else {
      console.log('err!');
    }
  } else {
    alert("Comment cannot be empty!");
  }
}

document.querySelector('.comment-submit').addEventListener('submit', postCommentHandler);
