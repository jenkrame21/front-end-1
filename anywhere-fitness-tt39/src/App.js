import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem('token'));

  return (
    <div className="App">
      <h1>Anywhere Fitness</h1>


    </div>
  );
}

export default App;
