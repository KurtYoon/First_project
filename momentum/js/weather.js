const API_KEY = "8e5b28c95b92ae0e7220439bf982562c";


function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const units = "metric";
    const lang = "kr";
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${units}`;
    fetch(url)
    .then(response => response.json())
    .then(data => 
        {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.sys.country;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        }
    );
}

function onGeoError()
{
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);