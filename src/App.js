import React from 'react';
import './App.css';
import Router1 from './Router1/Router1'
// import Router2 from './Router2/Router2'
// import Router4 from './Router4/Router4'
import Router4 from './Router4/Router4'
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <Router1></Router1>
        <Router4></Router4>
      </header>
    </div>
  );
}

export default App;
