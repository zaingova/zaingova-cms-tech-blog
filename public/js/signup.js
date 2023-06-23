
// handles signing up
const signupFormHandler = async (event) => {
  event.preventDefault();

  // grabs value from the elements with 'username-signup', 'email-signup' and 'password-signup' IDs.
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  console.log(username, password);

  // if username, email and password are valid, make a fetch request to the POST method for the api/users route to make a SIGNUP REQUEST
  if (username && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // if signup successful, redirect user to homepage
    if (response.ok) {
      location.reload();
      alert(`Signup successful! Automatically logged in as ${username}`);
    } else {
      console.log(response);
      alert("Signup failed");
    }
  }
};

document.getElementById("signup-form").addEventListener('submit', signupFormHandler);

