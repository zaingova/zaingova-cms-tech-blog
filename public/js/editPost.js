//location.reload();
const deletePost = document.getElementsByClassName('delete');
const editPost = document.getElementsByClassName('edit');
const submitEdit = document.getElementsByClassName('submit-comment');
let newTitle = document.getElementsByClassName('new-post-title');
let newBody = document.getElementsByClassName('new-post-content');

let textarea = document.querySelector('textarea');

console.log(newTitle)

let value = 0;

const deletePostHandler = async (event) => {
  value = event.target.value;
  console.log(value);

  const response = await fetch("/api/posts/delete", {
    method: "DELETE",
    body: JSON.stringify({ value }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    Popup("Post deleted!");
  } else {
    Popup('Unable to delete!');
  }
}

const showUpdateField = async (event) => {
  value = event.target.value;

  for (let i = 0; i < editPost.length; i++) {
    if (editPost[i].value == value) {
      if (window.getComputedStyle(document.getElementById(`${value}`)).display === "none")
        document.getElementById(`${value}`).style.display = "block";
      else
        document.getElementById(`${value}`).style.display = "none";
    }
  }
}

const updatePostHandler = async (event) => {
  event.preventDefault();

  value = event.target.value;
  let post_title;
  let post_contents;
  let date_created = Date.now();

  for (let i = 0; i < editPost.length; i++) {
    if (editPost[i].value == value) {
      post_title = newTitle[i].value.trim();
      post_contents = newBody[i].value.trim();
    }
  }

  const response = await fetch("/api/posts/update", {
    method: "PUT",
    body: JSON.stringify({ value, post_title, post_contents, date_created }),
    headers: { "Content-Type": "application/json" },
  })

  if (response.ok) {
    Popup("Post updated!")

  } else {
    Popup("Unable to update!")
  }
}



// adds as event listener to every 'delete post' button
for (var i = 0; i < deletePost.length; i++) {
  deletePost[i].addEventListener('click', deletePostHandler);
}

// adds an event listener to each 'edit post' button
for (var i = 0; i < editPost.length; i++) {
  editPost[i].addEventListener('click', showUpdateField);
}

for (var i = 0; i < submitEdit.length; i++) {
  submitEdit[i].addEventListener('click', updatePostHandler);
}