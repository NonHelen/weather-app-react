
import './App.css';
import Today from "./Today";


function App() {
  return (
    <div className="App">
      <h1>
        <div id="container">
          <div id="weatherapp">
            <Today defaultCity= "Aguascalientes"/>            
            <p id="coded-by"> coded by             
            <a href="https://github.com/NonHelen/weather-app-react"   > Helen Nonhoff</a>
            </p>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default App;
