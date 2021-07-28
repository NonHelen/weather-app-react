import React from "react";
import Date from "./Date";
import WeatherUnit from "./WeatherUnit";


export default function Weatherinfo (props) {
     return (
        <div>
            <img src={props.data.icon} alt="icon" id="icon"></img>
            <div className="container">
                <div className="weather-app" id="today">
                    <div className="row">
                        <div className="col-9 pt-2 city-name">
                            <div className="text-start" id="currentCity">
                                <h1 id="city">{props.data.city}</h1>
                            </div>
                        </div>
                        <div className="col-3 pt-2 city-name">
                            < WeatherUnit celsius= {props.data.temperature} />                           
                        </div>
                    </div>
                </div>
            </div>
            <div id="date">
                <Date />
            </div>

            <div id="details">
                <ul>
                    <li style={{ textTransform: 'capitalize'}}>{props.data.description}</li>
                    <li id="humidity" >💧 Humidity : {Math.round(props.data.humidity)}%</li>
                    <li>🌫Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
            </div>
        </div>
    );
}
