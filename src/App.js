import './App.css';
import "./style.css";
import Head from "./Head";
import Today from "./Today";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <h1>
        <div className="container">
          <div className="weatherapp">
            <Head />
            <Today />
            <Details />
            <hr />
            <p>coded by Helen Nonhoff</p>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default App;
