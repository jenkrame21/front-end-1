import React, { useState } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import './App.css';
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import AddClassForm from './components/AddClassForm'

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
      <Route path='/login' component={LoginForm}/>
      <Route path= '/signup' component={SignUpForm} />
      <Route path='/about' component={AboutUs}/>

    </div>
  );
}

export default App;
