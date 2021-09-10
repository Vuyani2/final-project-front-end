let form = document.querySelector("#banking-details");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let user_id = JSON.parse(localStorage.getItem("user")).user_id;
  sendEmail(user_id);
});

function sendEmail(user_id) {
  let tktshows = JSON.parse(localStorage.getItem("flightToBuy")) || [];

  console.log(user_id);
  console.log(tktshows[0]);

  fetch(`https://obscure-retreat-25084.herokuapp.com/send-email/${user_id}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tktshows),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
