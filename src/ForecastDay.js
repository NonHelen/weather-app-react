import React from 'react';


export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

    function icon (){
        let forecasticon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
        return forecasticon
    }



    return (
        <div>
            <div className="weatherForecast-day" >
                    {day()}
                    </div>
                    <img src={icon()} alt="icon" className="weatherForecast-icon center"></img>
                    <div className="weatherForecast-temperature">
                        <span className="weatherForecast-temperature-max" > {maxTemperature()} </span>
                        <span className="weatherForecast-temperature-min"> {minTemperature()} </span>
            </div>
        </div>
    )
}