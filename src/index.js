let now = new Date();
let date = document.querySelector("#date");
let time = document.querySelector("#time");

let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let dateNtime = document.querySelector("#dateNtime");
dateNtime.innerHTML = `Time: ${day} ${hour}:${minutes}`;

// Search Bar

function weatherNow(response) {
  console.log(response.data);
  let cityDisplay = (document.querySelector("#city").innerHTML =
    response.data.name);
  showData(response);
}

function citySearch(event) {
  event.preventDefault();
  let apiKey = "aa22a14fd56b104013633441c49c48ee";
  let city = document.querySelector("#input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(weatherNow);
}

let searchForm = document.querySelector(`form`);
searchForm = searchForm.addEventListener("submit", citySearch);
// Degrees
let degrees = document.querySelector(`.degreeword`);
function celsiusTemp(event) {
  degrees.innerHTML = `19°`;
}
function fahrenTemp(event) {
  degrees.innerHTML = `66F`;
}

let celsius = document.querySelector(`#celsius`);
celsius = celsius.addEventListener(`click`, celsiusTemp);

let fahrenheit = document.querySelector(`#fahrenheit`);
fahrenheit = fahrenheit.addEventListener(`click`, fahrenTemp);

function showData(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".degreeword");
  temperatureElement.innerHTML = `${temperature}°C`;
  let windKm = Math.round(response.data.wind.speed);
  let windKmElement = document.querySelector(".wind");
  windKmElement.innerHTML = `${windKm} km/h`;
  let weatherElement = document.querySelector("#precip");
  weatherElement.innerHTML = `${response.data.weather[0].main}`;
  let humidityElement = document.querySelector(".weather");
  humidityElement.innerHTML = `${response.data.main.humidity}%`;
}
