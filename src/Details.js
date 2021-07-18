import React from "react";

export default function Details() {
    return (
        <div className="details">
            <ul>
                <li> Sunrise: 7:00</li>
                <li> Sunset: 17:00</li>

                <li>
                    Humidity:
                    <section id="humidity">20</section>%
                </li>
            </ul>
        </div>
    );
}