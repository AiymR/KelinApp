import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Menu from "./Feed/Menu";
import Chat from "./Chat/Chat";
import profileRoute from "./Profile/Profile";

library.add(faIgloo)



const App = () => {
  return(
      <div>
          <Menu/>
      </div>
  );
}



export default App;
