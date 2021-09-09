let contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let from_ = document.querySelector("#from").value;
  let to = document.querySelector("#to").value;

  window.localStorage.setItem("from_", from_);
  window.localStorage.setItem("to", to);
  console.log(
    window.localStorage.getItem("from_"),
    window.localStorage.getItem("to")
  );
  window.location.href = "/get-flight.html";

  //   search(from_, to);
});

// function search(from_, to) {
//   console.log(from_);
//   console.log(to);
//   fetch(`https://obscure-retreat-25084.herokuapp.com/get-tkt/${from_}/${to}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       let ticket = data.data;
//       console.log(ticket);
//     });
// }
