import React, { useState } from "react";
import axios from 'axios';
import Today from "./Today";

export default function Weather(props) {
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);
    

    function handleResponse(response) {
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=e622d848ff198076554702327a2f95f9`;
    axios.get(url).then(handleResponse);

    return (
        <div> < Today />
        <div className="details">
            <ul>
                <li>Humidity : {Math.round(humidity)}%</li>
                <li>Wind: {Math.round(wind)} km/h</li>
            </ul>
        </div>
        </div>
    );
}