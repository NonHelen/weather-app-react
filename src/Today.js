import React, { useState } from "react";
import axios from 'axios';

export default function Weather(props) {
    let [temperature, setTemperature] = useState(null);
    let [icon, setIcon] = useState(null);

    function handleResponse(response) {
        setTemperature(response.data.main.temp);
        setIcon(
            `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );

    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=e622d848ff198076554702327a2f95f9`;
    axios.get(url).then(handleResponse);

return(
        <div className="today">
            <div className="row">
                <div className="col-7 heading">
                <img src={icon} alt="icon"></img>
                    <h1 id="city">{props.city}</h1>
                    <br />
                    <p id="date">13/06/2021</p>
                </div>
                <div className="col-5">
                    <div className="card current-weather">
                        <div className="card-body">
                            <span className="card-title" id="degree">
                                {Math.round(temperature)} °C
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
