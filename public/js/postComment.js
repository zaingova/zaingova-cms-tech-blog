// fucntion used for posting a new comment
const postCommentHandler = async (event) => {
  event.preventDefault();

  // pulls comment contents and the associated post_id from the html
  const comment = document.getElementById('comment-field').value.trim();
  const post_id = document.getElementById('post_id').innerHTML;

  // makes a fetch request as long as the comment isnt empty
  if (comment.length > 0) {
    const response = await fetch(`/api/comments/${post_id}`, {
      method: "POST",
      body: JSON.stringify({ comment, post_id }),
      headers: { "Content-Type": "application/json" },
    })

    if (response.ok) {
      location.reload();
    } else {
      console.log('err!');
    }
  } else {
    alert("Comment cannot be empty!");
  }
}

// adds an event listener to the button for submitting comments
document.querySelector('.comment-submit').addEventListener('submit', postCommentHandler);
