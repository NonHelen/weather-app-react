import React, { useState } from "react";
import Today from "./Today";

export default function Search() {
    let [city, setCities] = useState(null);
    const [alert, setAlert] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setAlert(<Today defaultCity="Aguascalientes" city={city} />);
    }

    function updateCity(event) {
        setCities(event.target.value);
    }

    return (
        <div id="head">
            <form id="search-form" onSubmit={handleSubmit}>
                <input type="search" placeholder="Type in city" onChange={updateCity} id="search-input" />
                <input type="submit" value="🔎" id="search-button"/>
                <button id="current-button">🚩</button>
            </form>
            <p> {alert} </p>
        </div>
    );
}
