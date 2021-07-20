import React, { useState } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Date from "./Date"


export default function Weather(props) {
    let [temperature, setTemperature] = useState(null);
    let [icon, setIcon] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);
    let [description, setDescription] = useState (null);

    function handleResponse(response) {
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setIcon(
            `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
        setDescription(response.data.weather[0].description)

    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=e622d848ff198076554702327a2f95f9`;
    axios.get(url).then(handleResponse);

    return (
        <div>

            <Container id="today">
                <Row >
                    <Col sm={9} id="heading">
                        <img src={icon} alt="icon"></img>
                        <h1 id="city">{props.city}</h1>
                    </Col>
                    <Col sm={3} id="heading">
                        <div id="current-weather">
                            {Math.round(temperature)} °C
                        </div>
                    </Col>
                </Row>
            </Container>
            <div id="date">
                <p><Date /></p>
            </div>
            <div id="details">
                <ul>
                    <li>{description}</li>
                    <li id="humidity" >💧 Humidity : {Math.round(humidity)}%</li>
                    <li>🌫Wind: {Math.round(wind)} km/h</li>
                </ul>
            </div>
        </div>
    );
}
