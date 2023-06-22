const postCommentHandler = async (event) => {
  event.preventDefault();

  const comment = document.getElementById('comment-field').value.trim();
  const post_id = document.getElementById('post_id').innerHTML;
  console.log(comment);
  console.log(post_id);

  const response = await fetch(`/api/comments/${post_id}`, {
    method: "POST",
    body: JSON.stringify({ comment, post_id }),
    headers: { "Content-Type": "application/json" },
  })

  console.log(response);

  if (response.ok) {
    document.location.reload();
    //document.location.replace(`/posts/${post_id}`);
  } else {
    console.log('err!');
  }
}

document.querySelector('.comment-submit').addEventListener('submit', postCommentHandler);
