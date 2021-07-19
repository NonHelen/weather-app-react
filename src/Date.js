import React from "react";


export default function Today(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let months = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let day = days[props.date.getDay()];
    let dayNumber = props.date.getDate();
    let month = months[props.date.getMonth()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <div className="Today">
            <div className="Date">
                {day} {dayNumber} {month}
            </div>
            <div className="Time">
                {hours}:{minutes}
            </div>
        </div>
    );
}