import React, {useState} from 'react';
import axios from 'axios';
import ForecastDay from "./ForecastDay";
import './WeatherForecast.css';

export default function Weatherforecast (props){
    const [forecast, setForecast] = useState({ready:false});


    function handleResponse (response){
        setForecast ({
        ready: true,
        forecast: response.data.daily,
    })}

    let apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&exclude={part}&appid=e622d848ff198076554702327a2f95f9&units=metric`
    axios.get(apiURL).then(handleResponse);
    
    if (forecast.ready) {
        return (
        <div id="weatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index){
                    if (index < 5){
                        return (
                        <div className="col" key={index}>
                                <ForecastDay data={dailyForecast} />
                            </div> 
                        );
                    } else {
                        return null
                    }
                })}
            </div>
        </div>
    )
} else {
        return "Loading...";
    }
}