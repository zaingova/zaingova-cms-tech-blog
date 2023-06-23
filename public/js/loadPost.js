
const renderPostHandler = async () => {
  const id = document.querySelector('#post-id').value;
  document.location.replace(`/posts/${id}`);
}

document.querySelector('.post-link').addEventListener('submit', renderPostHandler);