import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const App = () => {
  return(
      <div>
        <div>one div</div>
        <div className="app">
          <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
          </ul>
        </div>
      </div>
  );
}



export default App;
