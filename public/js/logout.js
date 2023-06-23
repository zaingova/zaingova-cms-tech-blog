
// logout event function
const logout = async () => {
  document.location.replace('/');
  // fetch request to users/logout POST request
  const response = await fetch('api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // if response is OK, redirect user to root directory
  if (response.ok) {
    document.location.replace('/login');
    alert("Goodbye!");
  } else {
    // if response fails, send alert
    console.log(response);
    alert('Logout failed');
  }
};

// adds event listener to the document element with 'logout' ID, and execute the 'logout' on CLICK
document.querySelector('#logout').addEventListener('click', logout);