const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const btn = document.querySelector('.btn')
const wind = document.querySelector('.wind')
const icon = document.querySelector('.icon')
const iconprev = document.querySelector('.fa-cloud-moon')



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const cityName = input.value;

  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=afbade79ea33afc7dfeabadb851b75d1`;

  fetch(api_url)
    .then((data) => {
      return data.json();
    })
    .then((newData) => {
      showWeather(newData);
    });


    clear()
});

function showWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    weather.textContent = data.weather[0].description;
    wind.textContent = `${data.wind.speed} km/h`;
    temp.textContent = `${Math.round(data.main.temp)}℃`;
     
    icon.src = ` http://openweathermap.org/img/wn/${data.weather[0].icon}.png`


    iconprev.style.display = 'none'
  }

  function clear() {
      input.value = ''
  }