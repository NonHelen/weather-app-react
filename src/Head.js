import React from "react";
import axios from 'axios';

export default function Head() {
    return (
        <div className="head">
            <form id="search-form">
                <input id="search-input" type="text" placeholder="Search" />
                <button id="search-button">🔎</button>
                <button id="current-button">🚩</button>
            </form>
        </div>
    );
}