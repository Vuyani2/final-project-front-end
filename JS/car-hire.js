//CREATING CARD

function createCard(carDetail) {
  return `
    <div class="product-item">
    <img src="${carDetail.Image}">
        <div class="product-details">
            <h3>${carDetail.car_name}</h3>
            <h4>${carDetail.pick_up}</h4>
            <h5>Supplier name: ${carDetail.supplier}</h5>
            <p>Fuel Policy is ${carDetail.fuel_policy}</p>
            <p>Price : R${carDetail.price} </p>
        </div>
        <div class="btns-container">
        <a href="./banking.html">Hire Now</a>
        </div>
    </div>    
      `;
}

function showCarDetails() {
  fetch("https://obscure-retreat-25084.herokuapp.com/get-car/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      let carDetails = data.data;
      let container = document.querySelector(".car-details");
      container.innerHTML = "";

      carDetails.forEach((car) => (container.innerHTML += createCard(car)));

      //
      //   localStorage.carDetails = JSON.stringify(data.data);
    });
}

showCarDetails();
