function showCart() {
  let card_button = document.querySelector(".ticketBuy");
  let blob = document.querySelector("#tktDetails");

  card_button.addEventListener("click", () => {
    blob.classList.toggle("active");
  });
}

fetch("https://obscure-retreat-25084.herokuapp.com/sort-tickets/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    localStorage.tktDetails = JSON.stringify(data.data);
  });

//CREATING CARD

function createCard(tktDetails) {
  let tktDetailsContainer = document.querySelector(".tktDetails");
  tktDetails.forEach((tktDetails) => {
    tktDetailsContainer.innerHTML += `
    <div class="flight-details">
    <div>From : ${tktDetails[0]}</div>
    <div>To : ${tktDetails[1]}</div>
    <div>Airline : ${tktDetails[2]}</div>
    <div>Depature : ${tktDetails[3]}</div>
    <div>arrival : ${tktDetails[4]}</div>
    <div>Class : ${tktDetails[5]}</div>
    <div>Price : ${tktDetails[6]}</div>
    <button onclick="showCart()" class="ticketBuy">Buy</button>
  </div>
      `;
  });
}
