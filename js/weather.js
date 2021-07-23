//https://openweathermap.org/api

const API_KEY = "e52095d47686c8659b241c0071e84faa";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    console.log("You live it", lat, log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innertText = data.name;
            weather.innertText = `${data.weather[0].main} / ${data.main.temp}`
        });
}
function onGeoError(){
    alert("Can't find you No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);