import React from 'react';
import './App.css';
import Router1 from './Router1/Router1'
import Router2 from './Router2/Router2'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Router1></Router1>
        <Router2></Router2>
      </header>
    </div>
  );
}

export default App;
