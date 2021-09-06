function showCart() {
  let card_button = document.querySelectorAll(".ticketBuy");
  let blob = document.querySelector("#tktDetails");

  card_button.forEach((btn) => {
    btn.addEventListener("click", () => {
      blob.classList.toggle("active");
    });
  });
}

fetch("https://obscure-retreat-25084.herokuapp.com/sort-tickets/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    let tickets = data.data;

    localStorage.tktDetails = JSON.stringify(data.data);
  });

//CREATING CARD

function createCard(tktDetails) {
  let tktDetailsContainer = document.querySelector(".flight-details");
  // console.log(tktDetailsContainer);
  // let tktDetails = JSON.parse(localStorage.getItem("tktDetails"));
  tktDetailsContainer.innerHTML = "";
  tktDetails.forEach((tktDetail) => {
    tktDetailsContainer.innerHTML += `
    <div class="flight-detail">
    <div>From : ${tktDetail.from_}</div>
    <div>To : ${tktDetail.to_}</div>
    <div>Airline : ${tktDetail.airline}</div>
    <div>Depature : ${tktDetail.departure}</div>
    <div>arrival : ${tktDetail.arrival}</div>
    <div>Class : ${tktDetail[5]}</div>
    <div>Price : R${tktDetail.price}</div>
    <button onclick="addToCart(${tktDetail.id})" class="ticketBuy">Buy</button>
  </div>
      `;
  });
}

createCard(JSON.parse(localStorage.getItem("tktDetails")));

//ADDING TO CART
// console.log(JSON.parse(localStorage.getItem("tkt")));
// createCard(JSON.parse(localStorage.getItem("tkt")));

function addToCart(id) {
  let cartProducts = [];
  showCart();
  fetch("https://obscure-retreat-25084.herokuapp.com/sort-tickets/", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      let tktd = data.data;
      console.log(tktd);
      let tktshow = tktd.find((tktDetail) => {
        return tktDetail.id == id;
      });

      console.log(tktshow);
      let tktshows = JSON.parse(localStorage.getItem("flight toBuy")) || [];
      cartProducts.push(tktshow);

      localStorage.setItem("flightToBuy", JSON.stringify(cartProducts));
      // showCartItems(tktshows);
      // showFlightDetails(JSON.parse(localStorage.getItem("tktDetails")));
      showFlightDetails(cartProducts);
    });
}

//SHOWING FLIGHT DETAILS

function showFlightDetails(tktshows) {
  let cartContainer = document.querySelector(".tktDetails");
  cartContainer.innerHTML = "";
  console.log(tktshows);
  tktshows.forEach((tktDetail) => {
    console.log(tktDetail);
    cartContainer.innerHTML += `
    <div>
    <img src="./img/Air-New-Zealand-Boeing-747-400.jpg" alt="" />
  </div>
  <div>
    <div class="flex">
    <div class="detail">From : ${tktDetail.from_}</div>
    <div class="detail">To : ${tktDetail.to_}</div>
    </div>
    
    <div class="detail">Airline : ${tktDetail.airline}</div>
    <div class="detail">Depature : ${tktDetail.departure}</div>
    <div class="detail">arrival : ${tktDetail.arrival}</div>
    <div class="detail">Class : Economy</div>
    <div class="detail">Type : ${tktDetail.type}</div>
    <div class="detail">Price : R${tktDetail.price}</div>
  </div>
  `;
  });
}
showFlightDetails(JSON.parse(localStorage.getItem("tktDetails")));
console.log(JSON.parse(localStorage.getItem("tktshows")));
JSON.parse(localStorage.getItem("tktshows"));
