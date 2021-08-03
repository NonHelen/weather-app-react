import React, {useState} from 'react';
import axios from 'axios';
import ForecastDay from "./ForecastDay";
import './WeatherForecast.css';

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

    useEffect(() => {
    setLoaded(false);
  }, [props.data.lat]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyForecast, index) {
            if (index < 4) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiURL= `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.coordinates.lon}&exclude={part}&appid=e622d848ff198076554702327a2f95f9&units=metric`
    axios.get(apiURL).then(handleResponse);

    return null;
    }
}


