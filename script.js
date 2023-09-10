 async function weather(city){
    const apikey = "5eb4faca3a41ab116fbcce93b10c5e6f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const wdata = await fetch(`${url}`).then(response => response.json());

    if(wdata.cod === '400'){
        alert("Please Enter a Loaction");
        return;
    }
    if(wdata.cod === `404`){
        img.src = 'image/404.png'
        temp.innerHTML = '--' + '°C';
        desc.innerHTML = '--';
        humidity.innerHTML = '--'+' %\nHumidity';
        pressure.innerHTML = '--'+' hPa\nPressure';
        wind.innerHTML = '--'+' mph\nWind';
        return;
    }
    console.log(wdata);

    temp.innerHTML = Math.round(wdata.main.temp-273)+'°C';
    desc.innerHTML = wdata.weather[0].description;
    humidity.innerHTML = wdata.main.humidity+' %\nHumidity';
    pressure.innerHTML = wdata.main.pressure+' hPa\nPressure';
    wind.innerHTML = wdata.wind.speed+' mph\nWind';
    
    switch(wdata.weather[0].main){
        case 'Clouds':
            img.src = "image/cloud.png";
            break;
        case 'Clear':
            img.src = "image/clear.png";
            break;
        case 'Rain':
            img.src = "image/rain.png";
            break;
        case 'Mist':
            img.src = "image/mist.png";
            break;
        case 'Snow':
            img.src = "image/snow.png";
            break;
    }
}
const city = document.getElementById('city');
const img = document.querySelector('.weather-detail img');
const btn = document.querySelector('.searchicon');
const temp = document.getElementById('p1');
const desc = document.getElementById('p2');
const wind = document.getElementById('wind');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');

btn.addEventListener('click',()=>{
    weather(city.value);
});


