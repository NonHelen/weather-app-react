import './App.css';
import "./style.css";
import Today from "./Today";


function App() {
  return (
    <div className="App">
      <h1>
        <div id="container">
          <div id="weatherapp">
            <Today defaultCity="Aguascalientes"/>
            <hr />
            <p id="coded-by" >coded by Helen Nonhoff</p>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default App;
