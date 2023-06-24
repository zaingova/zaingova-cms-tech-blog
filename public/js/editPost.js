// query.class selectors for page elements
const deletePost = document.getElementsByClassName('delete');
const editPost = document.getElementsByClassName('edit');
const submitEdit = document.getElementsByClassName('submit-comment');
const submitPost = document.querySelector('.create-post');
const showNewPost = document.querySelector('.show-new');

let newTitle = document.getElementsByClassName('new-post-title');
let newBody = document.getElementsByClassName('new-post-content');

// used to dynamically grab the correct set of edit/delete buttons -> will be set to equal the post_id
let value = 0;

// function for deleting posts
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
    alert('Unable to delete!');
  }
}

// function used for displaying the form for updating posts
const showUpdateField = async (event) => {
  value = event.target.value;

  // when the button is clicked, depending on whether the form is visible, make is invisible/visible
  for (let i = 0; i < editPost.length; i++) {
    if (editPost[i].value == value) {
      if (window.getComputedStyle(document.getElementById(`${value}`)).display === "none")
        document.getElementById(`${value}`).style.display = "block";
      else
        document.getElementById(`${value}`).style.display = "none";
    }
  }
}

// function used for updating posts
const updatePostHandler = async (event) => {
  event.preventDefault();

  value = event.target.value;
  let post_title;
  let post_contents;
  let date_created = Date.now();

  // takes the values of post_title and post_contents at a specif index (reflecting the post_id) and saves them to variables
  for (let i = 0; i < editPost.length; i++) {
    if (editPost[i].value == value) {
      post_title = newTitle[i].value.trim();
      post_contents = newBody[i].value.trim();
    }
  }

  // plugs data into a fetch request
  const response = await fetch("/api/posts/update", {
    method: "PUT",
    body: JSON.stringify({ value, post_title, post_contents, date_created }),
    headers: { "Content-Type": "application/json" },
  })

  if (response.ok) {
    alert("Post updated!");
    location.reload();
  } else {
    alert("Unable to update!");
  }
}

// function used to display/hide the form for creating a new post
const showNewPostFormHandler = async (event) => {
  event.preventDefault();

  // when the button is clicked, depending on whether the form is visible, make is invisible/visible
  if (window.getComputedStyle(document.getElementById('new-post-div')).display === "none")
    document.getElementById('new-post-div').style.display = "block";
  else
    document.getElementById('new-post-div').style.display = "none";
}

// function used for creating a new post
const createPostHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('.create-post-title').value.trim();
  const post_contents = document.querySelector('.create-post-body').value.trim();
  const date_created = Date.now();

  console.log(post_title);
  console.log(post_contents);

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ post_title, post_contents, date_created }),
    headers: { "Content-Type": "application/json" },
  })

  if (response.ok) {
    alert("Post created!");
    location.reload();
  } else {
    alert("Unable to update!");
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

// adds an event listner to the button for submitting a post-edit
for (var i = 0; i < submitEdit.length; i++) {
  submitEdit[i].addEventListener('click', updatePostHandler);
}

// adds event listener to the buttons for toggling the new post form, and for submitting the new post
submitPost.addEventListener('click', createPostHandler);
showNewPost.addEventListener('click', showNewPostFormHandler);