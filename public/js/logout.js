// logout event function
const logout = async () => {
   // fetch request to users/logout POST request
   const response = await fetch('api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
   });

   // if response is OK, redirect user to root directory
   if (response.ok) {
      document.location.replace('/');
   } else {
      // if response fails, send alert
      alert('Logout failed');
   }
};

// adds event listener to the document element with 'logout' ID, and execute the 'logout' on CLICK
document.querySelector('#logout').addEventListener('click', logout);