import React from "react";
import Date from "./Date";

export default function Weatherinfo (props) {
     return (
        <div>
            <div className="container">
                <div className="weather-app" id="today">
                    <div className="row">
                        <div className="col-6 pt-2 city-name">
                            <div className="text-start" id="currentCity">
                                <img src={props.data.icon} alt="icon"></img>
                                <h1 id="city">{props.data.city}</h1>
                            </div>
                        </div>
                        <div className="col-6 pt-2 city-name">
                            <div className="text-start" id="current-weather">
                                {Math.round(props.data.temperature)} °C
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="date">
                <p><Date /></p>
            </div>
            <div id="details">
                <ul>
                    <li>{props.data.description}</li>
                    <li id="humidity" >💧 Humidity : {Math.round(props.data.humidity)}%</li>
                    <li>🌫Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
            </div>
        </div>
    );
}
