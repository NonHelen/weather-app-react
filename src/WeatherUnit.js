import React, {useState} from "react";

export default function Unitconversion (props) {
const [unit, setUnit] = useState ("celsius");

function showFahrenheit (event) {
    event.preventDefault ();
    setUnit ("fahrenheit")
}

function showCelsius (event) {
    event.preventDefault ();
    setUnit ("celsius")
}

if (unit === "celsius") {
    return (
        <div className="text-start" id="current-weather">
            <span>
            {Math.round(props.celsius)}</span> 
            <span id="unit"> °C | <a id="fahrenheit" href="/" onClick= {showFahrenheit} > °F </a> </span> 
        </div>
    )   
} else {
    return (
        <div className="text-start" id="current-weather">
            <span>
            {Math.round((props.celsius) * 9/5) + 32 }</span> 
            <span id="unit"> <a id="fahrenheit" href="/" onClick= {showCelsius} > °C </a> |  °F  </span> 
        </div>
    )
}
}
