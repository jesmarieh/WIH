import './App.css';
import React from 'react';
import { Checkbox } from 'antd';  
import { Api1 } from './components';
import {fetchData} from './api';


class App extends React.Component {

  state = {
    data: {},
}

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data:fetchedData});
}
  render() {
    const {data} = this.state;
    return(
      <Checkbox onChange={(e)=>e.target.checked}> <Api1 data= {data}/> </Checkbox>
      
    );
  }
}

export default App;
