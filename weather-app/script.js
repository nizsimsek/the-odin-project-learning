const API_KEY = "API_KEY";

const cityNameInput = document.getElementById("cityName");
const findBtn = document.getElementById("findBtn");
const iconDiv = document.querySelector(".icon");
const weatherDescDiv = document.querySelector(".weatherDesc");
const countryNameDiv = document.querySelector(".countryAndName");
const celsiusDiv = document.querySelector(".celsius");
const errorDiv = document.querySelector(".error");

findBtn.addEventListener("click", getCurrentWeatherDataWithCityName.bind(this, cityNameInput));

cityNameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        findBtn.click();
    }
});

fetch('https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=' + API_KEY)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (response) {
            iconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png" />`;
            const desc = response.weather[0].description.split(' ');
            weatherDescDiv.innerText = desc[0][0].toUpperCase() + desc[0].substring(1) + ' ' + desc[1][0].toUpperCase() + desc[1].substring(1);
            countryNameDiv.innerText = response.sys.country + " " + response.name;
            celsiusDiv.innerText = parseInt(response.main.temp - 273.15) + ' °C';
        }
    );

async function getCurrentWeatherDataWithCityName(cityName) {
    if (cityName.value == "") {
        errorDiv.innerText = "Invalid city name."
        iconDiv.innerText = "";
        weatherDescDiv.innerText = "";
        countryNameDiv.innerText = "";
        celsiusDiv.innerText = "";
    } else {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName.value + '&appid=' + API_KEY);
        const weatherData = await response.json();
        if (weatherData.name === undefined) {
            errorDiv.innerText = "City not found.";
            iconDiv.innerText = "";
            weatherDescDiv.innerText = "";
            countryNameDiv.innerText = "";
            celsiusDiv.innerText = "";
        } else {
            errorDiv.innerText = "";
            //console.log(weatherData.weather[0].icon)
            iconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`;
            const desc = weatherData.weather[0].description.split(' ');
            weatherDescDiv.innerText = desc[0][0].toUpperCase() + desc[0].substring(1) + ' ' + desc[1][0].toUpperCase() + desc[1].substring(1);
            countryNameDiv.innerText = weatherData.sys.country + " " + weatherData.name;
            celsiusDiv.innerText = parseInt(weatherData.main.temp - 273.15) + ' °C';
        }
    }
}