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

let regForm = document.querySelector(".form");

//SUBMIT FOR REG

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.querySelector(".first-name").value;
  let lastName = document.querySelector(".last-name").value;
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;

  let details = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password,
  };

  console.log(details);

  fetch("https://lit-beach-56409.herokuapp.com/user-registration/", {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(details),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

function login(username, password) {
  console.log(username);
  console.log(password);
  fetch("https://lit-beach-56409.herokuapp.com/auth", {
    method: "POST",
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        window.location.href = "./products.html";
      }
    });
}

document.querySelector(".login-form").addEventListener("submit", (e) => {
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  e.preventDefault();
  login(username, password);
});
