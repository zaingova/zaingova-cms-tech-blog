// handles loggin in
const loginFormHandler = async (event) => {
   event.preventDefault();

   // grabs value from the elements with 'email-login' and 'password-login' IDs.
   const email = document.querySelector('#email-login').value.trim();
   const password = document.querySelector('#password-login').value.trim();

   // if email and password are valid, make a fetch request to the POST method for the api/users/login route to make a LOGIN REQUEST
   if (email && password) {
      const response = await fetch('api/users/login', {
         method: 'POST',
         body: JSON.stringify({ email, password }),
         headers: { 'Content-Type': 'application/json' },
      });

      // if login successful, redirect user to homepage
      if (response.ok) {
         document.location.replace('/');
      } else {
         alert('Login failed');
      }
   }
}

// handles signing up
const signupFormHandler = async (event) => {
   event.preventDefault();

   // grabs value from the elements with 'username-signup', 'email-signup' and 'password-signup' IDs.
   const username = document.querySelector('#username-signup').value.trim();
   const email = document.querySelector('#email-signup').value.trim();
   const password = document.querySelector('#password-signup').value.trim();

   // if username, email and password are valid, make a fetch request to the POST method for the api/users route to make a SIGNUP REQUEST
   if (username && email && password) {
      const response = await fetch('api/users', {
         method: 'POST',
         body: JSON.stringify({ username, email, password }),
         headers: { 'Content-Type': 'application/json' },
      });

      // if signup successful, redirect user to homepage
      if (response.ok) {
         document.location.replace('/');
      } else {
         alert('Signup failed')
      }
   }
}

// add respective event listeners to each form for LOGIN and SIGNUP
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);