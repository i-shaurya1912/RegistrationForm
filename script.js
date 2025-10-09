// Select both buttons
const signupBtn = document.querySelector(".signupbtn");
const signinBtn = document.querySelector(".signinbtn");

// REGISTER (SIGN UP)
signupBtn.addEventListener("click", function () {
  const inputs = document.querySelectorAll(".input-field input");

  const name = inputs[0].value.trim();
  // console.log("name", name);
  const email = inputs[1].value.trim();
  const contact = inputs[2].value.trim();
  const gender = inputs[3].value.trim();
  const password = inputs[4].value.trim();
  const confirmPassword = inputs[5].value.trim();

  // Validation checks
  if (
    name === "" ||
    email === "" ||
    contact === "" ||
    gender === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill all the fields!");
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address!");
    return;
  }

  if (contact.length !== 10 || isNaN(contact)) {
    alert("Please enter a valid 10-digit contact number!");
    return;
  }
  if (
    gender.toLowerCase() !== "male" &&
    gender.toLowerCase() !== "female" &&
    gender.toLowerCase() !== "other"
  ) {
    alert("Please enter gender as Male, Female, or Other.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // ✅ Save user data to localStorage
  const userData = {
    name: name,
    email: email,
    contact: contact,
    gender: gender,
    password: password,
  };

  localStorage.setItem("user", JSON.stringify(userData)); // just storing to check it for login

  alert("Registration Successful 🎉");
  document.querySelector("form").reset();
});

// LOGIN (SIGN IN)
signinBtn.addEventListener("click", function () {
  // console.log("Sign in button clicked");
  const inputs = document.querySelectorAll(".input-field input");

  const email = inputs[0].value.trim();
  const password = inputs[1].value.trim();

  // Get stored user
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found. Please register first!");
    return;
  }

  // Check if email & password match
  if (email === storedUser.email && password === storedUser.password) {
    alert("Login Successful 🎉");
  
  } else {
    alert("Invalid email or password!");
  }
});
