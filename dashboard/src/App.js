import './App.css';
import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import axios from 'axios';  



function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <Checkbox onChange={(e)=>e.target.checked}>App started</Checkbox>

        <div>{getMessage.status === 200 ? 
          <h5>{getMessage.data}</h5>
          :
          <h5>LOADING</h5>}</div>
      </header>
    </div>
  );
}
export default App;
