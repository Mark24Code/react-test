import React from 'react';
import logo from './logo.svg';
import Logo2 from './logo2';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo logo1" alt="logo" />

        {/* 起作用的是透传颜色 */}
        <Logo2 className="logo2" color="red"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
