import './App.css';
import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import axios from 'axios';  



function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <Checkbox onChange={(e)=>e.target.checked}>React + Flask Tutorial</Checkbox>

        <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
      </header>
    </div>
  );
}
export default App;
