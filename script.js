const apikey="afad207a665f3d61c0dbdc9ae1e7a2ea";
const url ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let city=document.getElementById("inputbox")
let search=document.getElementById("submit");
const weathericon=document.querySelector(".weather-icon");
let weathertile=document.querySelector(".weather");

async function check(city) {
    const response = await fetch(url+city+`&appid=${apikey}`);
    var result =await response.json();
    if(response.status=="404")
    {   weathertile.style.display="none"
        document.querySelector(".error01").style.display="block"
    }
    else{
         document.querySelector(".city").innerHTML=result.name;
    document.querySelector(".temp").innerHTML=Math.round(result.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=result.main.humidity+"%";
    document.querySelector(".wind").innerHTML=result.wind.speed+"km/h";
    if(result.weather[0].main=="Rain")
    {
        weathericon.src="/30 days 30 Projects/DAY1(weather app)/images/rain.png";
    }
    else if(result.weather[0].main=="Clouds")
    {
        weathericon.src="/30 days 30 Projects/DAY1(weather app)/images/clouds.png";
    }
    else if(result.weather[0].main=="Drizzle"){
        weathericon.src="/30 days 30 Projects/DAY1(weather app)/images/drizzle.png";
    }
    else if(result.weather[0].main=="Snow"){
        weathericon.src="/30 days 30 Projects/DAY1(weather app)/images/snow.png";
    }
    else if(result.weather[0].main=="Mist"){
        weathericon.src="/30 days 30 Projects/DAY1(weather app)/images/mist.png";
    }
    else if(result.weather[0].main=="Clear"){
        weathericon.src="/30 days 30 Projects/DAY1(weather app)/images/clear.png";
    }
    weathertile.style.display="block";
    document.querySelector(".error01").style.display="none";    
    
}

} 
    
search.addEventListener("click",function(){
    check(city.value);

});