import React, { useState } from "react";
import Details from "./Details";
import Today from "./Today";

export default function Search() {
    let [city, setCities] = useState(null);
    const [alert, setAlert] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setAlert(<Details city={city} />);
        setAlert(<Today city={city} />);
    }

    function updateCity(event) {
        setCities(event.target.value);
    }

    return (
        <div className="head">
            <form id="search-form" onSubmit={handleSubmit}>
                <input type="search" placeholder="Type in city" onChange={updateCity} />
                <input type="submit" value="🔎" id="search-button"/>
                <button id="current-button">🚩</button>
            </form>
            <p> {alert} </p>
        </div>
    );
}
