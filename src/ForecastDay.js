import React from 'react';


export default function Forecastday (props) {

    function minTemp (){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function maxTemp (){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function icon (){
        let forecasticon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        return forecasticon
    }

    function day (){
        let date = new Date (props.data.forecastday * 1000);
        let day = date.getDate();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]

        return days [day];
    }

    return (
        <div>
            <div className="weatherForecast-day" >
                        {day()}
                    </div>
                    <img src={icon} alt="icon" className="weatherForecast-icon"></img>
                    <div className="weatherForecast-temperature">
                        <span className="weatherForecast-temperature-max" > {maxTemp} </span>
                        <span className="weatherForecast-temperature-min"> {minTemp} </span>
            </div>
        </div>
    )
}