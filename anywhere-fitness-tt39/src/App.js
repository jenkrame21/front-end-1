import React, { useState } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem('token'));
  const { push } = useHistory();

  const logout = () => {
    window.localStorage.removeItem('token')
    setLoggedIn(false)
    push('/')
  }


  return (
    <div className="App">
      <NavBar loggedIn={loggedIn} logout={logout}/>
      <h1>Anywhere Fitness</h1>

    <Route />

    </div>
  );
}

export default App;
