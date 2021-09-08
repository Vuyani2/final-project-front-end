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
    
      `;
  });
}
