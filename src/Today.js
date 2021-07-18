import React, { useState } from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Weather(props) {
    let [temperature, setTemperature] = useState(null);
    let [icon, setIcon] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [wind, setWind] = useState(null);

    function handleResponse(response) {
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setIcon(
            `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );

    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=e622d848ff198076554702327a2f95f9`;
    axios.get(url).then(handleResponse);

    return (
        <div>
            <div id="today">
                <Container>
                    <Row id="row heading">
                        <Col sm={8}>
                            <img src={icon} alt="icon"></img>
                            <h1 id="city">{props.city}</h1>
                        </Col>
                        <Col sm={4}>
                            <div id="current-weather">
                                <span className="card-title" id="degree">
                                    {Math.round(temperature)} °C
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <br />
                            <p id="date">13/06/2021</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <ul>
                    <li>💧 Humidity : {Math.round(humidity)}%</li>
                    <li>🌫Wind: {Math.round(wind)} km/h</li>
                </ul>
            </div>
        </div>
    );
}
