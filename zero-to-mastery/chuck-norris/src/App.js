import logo from './chuck.gif';
import './App.css';
import React, {useState, useEffect} from "react";

function App() {

  const [data, setData] = useState(null)

  const apiGet = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setData(json);
      });
  };

  useEffect (() => {
    apiGet();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button 
        type="button" 
        onClick={apiGet}>Click for Joke</button>
        <br />
        {/* Check if data is available and render the joke */}
        <div>
        {data ? <p>{data.value}</p> : <p>Loading...</p>}
        </div>
      </header>
    </div>
  );
};

export default App;
