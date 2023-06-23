
// handles loggin in
const loginFormHandler = async (event) => {
  event.preventDefault();

  // grabs value from the elements with 'email-login' and 'password-login' IDs.
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log(username, password);

  // if email and password are valid, make a fetch request to the POST method for the api/users/login route to make a LOGIN REQUEST
  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // if login successful, redirect user to homepage
    if (response.ok) {
      document.location.replace("/");
      alert(`Login successful! Welcome back, ${username}!`);
    } else {
      alert("Login failed! Incorrect username or password!");
    }
  }
};

const signupRedirect = async () => {
  document.location.replace("/signup");
}

// add respective event listeners to each form for LOGIN and SIGNUP
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document.querySelector('#signup-redirect').addEventListener('submit', signupRedirect);
