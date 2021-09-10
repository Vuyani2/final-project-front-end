// INITIALIZING VARIABLES FOR BTNs

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

let regForm = document.querySelector(".sign-up-form");

//SUBMIT FOR REG

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.querySelector(".first-name").value;
  let lastName = document.querySelector(".last-name").value;
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone-no").value;

  let details = {
    first_name: firstName,
    last_name: lastName,
    username: username,
    password: password,
    email: email,
    mobile_number: phone,
  };

  console.log(details);

  fetch("https://obscure-retreat-25084.herokuapp.com/user-registration/", {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(details),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = "/index.html";
    });
});

let loginForm = document.querySelector(".sign-in-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;

  login(username, password);
});

function login(username, password) {
  console.log(username);
  console.log(password);
  fetch("https://obscure-retreat-25084.herokuapp.com/get-user/", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let users = data.data;
      let user_found = false;

      users.forEach((user) => {
        if (user.username == username && user.password == password) {
          user_found = true;
          localStorage.setItem("user", JSON.stringify(user));
          window.location.href = "/flights.html";
          console.log(user_found);
          // return;
        }
      });

      console.log(user_found);
      if (!user_found) {
        alert("User not found");
      }
    });
}

// document.querySelector(".login-form").addEventListener("submit", (e) => {
//   let username = document.querySelector(".username").value;
//   let password = document.querySelector(".password").value;
//   e.preventDefault();
//   login(username, password);
// });

console.log(loginForm);
