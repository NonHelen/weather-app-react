import React from "react";

export default function Today() {
    return (
        <div className="today">
            <div className="row">
                <div className="col-7 heading">
                    <img
                        src="https://media2.giphy.com/media/fwR54Wq7dYu9VXKiAF/giphy.gif"
                        alt="SUN GIF"
                        width="100"
                    />
                    <h1 id="city">Tübingen</h1>
                    <br />
                    <p id="date">13/06/2021</p>
                </div>
                <div className="col-5">
                    <div className="card current-weather">
                        <div className="card-body">
                            <span className="card-title" id="degree">
                                18
                            </span>
                            <p>18°C</p> |<p>68°F</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
