import React, {useState} from 'react';
import axios from 'axios';
import './WeatherForecast.css'

export default function Weatherforecast (props){
    const [forecast, setForecast] = useState({ready:false});


    function handleResponse (response){
        setForecast ({
        ready: true,
        forecasttempmax: response.data.daily[0].temp.max,
        forecasttempmin: response.data.daily[0].temp.min,
        forecastday: response.data.daily[0].dt,
        forecasticon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png` 
    })}

    let apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&exclude={part}&appid=e622d848ff198076554702327a2f95f9&units=metric`
    axios.get(apiURL).then(handleResponse);
    
    if (forecast.ready) {
        return (
        <div id="weatherForecast">
            <div className="row">
                <div className="col">
                <div className="weatherForecast-day" >
                    {forecast.forecastday}
                </div>
                <img src={forecast.forecasticon} alt="icon" className="weatherForecast-icon"></img>
                <div className="weatherForecast-temperature">
                    <span className="weatherForecast-temperature-max" > {Math.round(forecast.forecasttempmax)}° </span>
                    <span className="weatherForecast-temperature-min"> {Math.round(forecast.forecasttempmin)}° </span>
                </div>
                </div>
            </div>
        </div>
    )
} else {
        return "Loading...";
    }
}