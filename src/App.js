import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import AppRouter from "./AppRouter/AppRouter";

library.add(faIgloo)



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
          <AppRouter/>
      </div>
  );
}



export default App;
