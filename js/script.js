function change() {
  var time = new Date().getHours();
  var body = document.body;
  var bstyle = body.style;
  if (time > 5 && time < 9) {
    bstyle.backgroundColor = "#f6d365";
    bstyle.backgroundImage =
      "linear-gradient(to right, rgba(246, 211, 101, 0.5), rgba(253, 160, 133, 0.5))";
  } else if (time > 10 && time < 19) {
    bstyle.backgroundColor = "#fa709a";
    bstyle.backgroundImage =
      "linear-gradient(to right, rgba(250, 112, 154, 0.5), rgba(254, 225, 64, 0.5))";
  } else {
    bstyle.backgroundColor = "#4B79A1";
    bstyle.backgroundColor =
      "-webkit-gradient(linear, left bottom, left top, from(#283E51), to(#0A2342))";
    bstyle.backgroundImage = "url('./assets/stars.png')";
  }
}
function showDateTime() {
  var myDiv = document.querySelector("#Date");

  var date = new Date();
  var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dayName = dayList[date.getDay()];
  var monthName = monthNames[date.getMonth()];
  var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;

  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var time = hour + ":" + min + ":" + sec;
  myDiv.innerText = `Today is  ${today}. The Time is ${time}`;
}
setInterval(showDateTime, 1000);
const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");
const error = document.querySelector(".error-msg");
form.addEventListener("submit", handleSubmit);
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  fetchWeather();
}

async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`,
    {
      mode: "cors",
    }
  );
  if (response.status === 400) {
    throwErrorMsg();
  } else {
    error.style.display = "none";
    const weatherData = await response.json();
    const newData = processData(weatherData);
    displayData(newData);
    reset();
  }
}

function throwErrorMsg() {
  error.style.display = "block";
  if (error.classList.contains("fade-in")) {
    error.style.display = "none";
    error.classList.remove("fade-in2");
    error.offsetWidth;
    error.classList.add("fade-in");
    error.style.display = "block";
  } else {
    error.classList.add("fade-in");
  }
}

function processData(weatherData) {
  // grab all the data i want to display on the page
  const myData = {
    condition: weatherData.current.condition.text,
    feelsLike: {
      f: Math.round(weatherData.current.feelslike_f),
      c: Math.round(weatherData.current.feelslike_c),
    },
    currentTemp: {
      f: Math.round(weatherData.current.temp_f),
      c: Math.round(weatherData.current.temp_c),
    },
    wind: Math.round(weatherData.current.wind_mph),
    humidity: weatherData.current.humidity,
    location: weatherData.location.name.toUpperCase(),
  };

  // if in the US, add state
  // if not, add country
  if (weatherData.location.country === "United States of America") {
    myData["region"] = weatherData.location.region.toUpperCase();
  } else {
    myData["region"] = weatherData.location.country.toUpperCase();
  }

  return myData;
}

function displayData(newData) {
  const weatherInfo = document.getElementsByClassName("info");
  Array.from(weatherInfo).forEach((div) => {
    if (div.classList.contains("fade-in2")) {
      div.classList.remove("fade-in2");
      div.offsetWidth;
      div.classList.add("fade-in2");
    } else {
      div.classList.add("fade-in2");
    }
  });
  document.querySelector(".condition").textContent = newData.condition;
  document.querySelector(
    ".location"
  ).textContent = `${newData.location}, ${newData.region}`;
  document.querySelector(".degrees").textContent = newData.currentTemp.f;
  document.querySelector(
    ".feels-like"
  ).textContent = `FEELS LIKE: ${newData.feelsLike.f}`;
  document.querySelector(".wind-mph").textContent = `WIND: ${newData.wind} MPH`;
  document.querySelector(
    ".humidity"
  ).textContent = `HUMIDITY: ${newData.humidity}`;
}

function reset() {
  form.reset();
}

// get location from user
function fetchWeather() {
  const input = document.querySelector('input[type="text"]');
  const userLocation = input.value;
  getWeatherData(userLocation);
}

function log() {
    setTimeout(
      console.log.bind(
        console,
        "%c This Was Created By => Sergio J Cerritos %c",
        "background-color: #bdd4e7;background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);padding:5px;border-radius: 5px;line-height: 26px;",
        ""
      )
    );
  }
  log();