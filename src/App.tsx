import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(0)

  const color = status === 0 ? "#92a8d1" : status === 200 ? "#b1cbbb" : "#eea29a"

  const checkStatus = () => {
    axios.get('/status')
    .then(response => {
      // handle success
      console.log(response);
      setStatus(response.status)
    })
    .catch(error => {
      // handle error
      console.log(error);
      setStatus(500)
    })
    .finally(() =>{
      // always executed
      setLoading(false)
    });
}

  return (
    <div className="App">
      <div className="Header">
        Welcome!
      </div>
      <div className="Server">
        <button className="Button" onClick={checkStatus} disabled={loading}>Check server</button>
      </div>
      {status > 0 ?
      <div className="Status" style={{backgroundColor: color}}> </div>
      : undefined}
    </div>
  );
}

export default App;
