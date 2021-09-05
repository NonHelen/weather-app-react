import React, { useState } from "react";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Today.css"


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState ({ready:false});
    const [city, setCity] = useState (props.defaultCity);

    function handleResponse(response) {
        setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            city: response.data.name,
            lon: response.data.coord.lon,
            lat: response.data.coord.lat,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }
    
    function search (){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e622d848ff198076554702327a2f95f9`;
    axios.get(url).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search ();
    }

    function updateCity(event) {
        setCity (event.target.value);
    }

    if (weatherData.ready) {
        return (
             <div >
             <div id= "head">
                <form id="search-form" onSubmit={handleSubmit}>
                    <input type="search" placeholder="Type in city" autoComplete="off" autoFocus="on" onChange={updateCity} id="search-input" />
                    <input type="submit" value="🔎" id="search-button"/>
                </form>
            </div>
            <WeatherInfo data={weatherData} />
            <hr />
            <WeatherForecast data={weatherData} />
            </div>
        )
    } else {
        search();
        return "Loading...";
    }
}








    
   
    