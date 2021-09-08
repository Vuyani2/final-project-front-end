let form = document.querySelector("#banking-details");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});

function sendEmail(user_id) {
  let tktshows = JSON.parse(localStorage.getItem("flight toBuy")) || [];

  console.log(tktshows);

  fetch(`https://obscure-retreat-25084.herokuapp.com/send-email/${user_id}/`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tktshows),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
