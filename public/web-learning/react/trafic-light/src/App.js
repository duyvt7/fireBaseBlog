import React, { Component } from 'react';
import './App.css';
import TraficLight from './component/traficlight';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <TraficLight />
      </div>
    )
  }
}

export default App;
