import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let cityPromise = await fetch(config.backendEndpoint + "/cities");
    let cityData = await cityPromise.json();
    console.log(cityPromise);
    return cityData;
} catch (err) {
    return null;
}
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  let container = document.createElement("div");
  container.setAttribute("class", "col-sm-6 col-lg-3 my-4")
   
  container.innerHTML = ` <a href="pages/adventures/?city=${id}" id="${id}" target="_blank">
<div class="tile">
            <div class="tile-text text-center">
              <h5>${city}</h5>
              <p>${description}}</p>
            </div>
            <img src="${image}g" alt="Bengaluru Image" />
          </div>
 </a>git 
`;
  let rowele = document.getElementById("data");
  rowele.append(container);
  // container.addEventListener('click', ()=>{
    
  //   const url = `pages/adventures/?city=${id}`;
  //   window.open(url, '_blank');
     

  // })
  // 1. Populate the City details and insert those details into the DOM

}

export { init, fetchCities, addCityToDOM };
