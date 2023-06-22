const deletePost = document.getElementsByClassName('delete');
const editPost = document.getElementsByClassName('edit');
let post_id;

const deletePostHandler = async (event) => {
  value = event.target.value;
  console.log(value);

  const response = await fetch("/api/posts/delete", {
    method: "DELETE",
    body: JSON.stringify({ value }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    alert("Post deleted!");
    location.reload();
  } else {
    console.log('error!');
  }
}

const updatePostHandler = async (event) => {
  value = event.target.value;
  console.log(value);

  // const response = await fetch("/api/comments/delete", {
  //   method: "DELETE",
  //   body: JSON.stringify({ comment_id }),
  //   headers: { "Content-Type": "application/json" },
  // });

  // if (response.ok) {
  //   alert("Comment deleted!");
  //   location.reload();
  // } else {
  //   console.log('error!');
  // }
}

for (var i = 0; i < deletePost.length; i++) {
  deletePost[i].addEventListener('click', deletePostHandler);
}

for (var i = 0; i < editPost.length; i++) {
  editPost[i].addEventListener('click', updatePostHandler);
}