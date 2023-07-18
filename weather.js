const inputBox=document.getElementById('city');
const searchBtn =document.getElementById('searchBtn');
let weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const weather_body=document.querySelector('.weather-body');
const location_not_found=document.querySelector('.location-not-found');

async function checkWeather(city){
    const api_key="48560f289fd400c4a7744402126ee43d";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data= await fetch(`${url}`).then(response => response.json());
    
    if(weather_data.cod === `404`){
        
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        return;
    }


    location_not_found.style.display="none";
    weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML=`${(weather_data.weather[0].description)}` ;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/hr`;
    // if(weather_data.weather[0].main=="Mist"){
    //     weather_img.src="weather/mist.png";
    // }
    console.log(weather_data);
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="weather/cloud.png";
            break;
        case 'Mist':
            weather_img.src="weather/mist.png";
            break;
        case 'Clear':
            weather_img.src="weather/clear.png";
            break;
        case 'Snow':
            weather_img.src="weather/snow.png";
            break;
        case 'Rain':
            weather_img.src="weather/rain.png";
            break;
    }

}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});