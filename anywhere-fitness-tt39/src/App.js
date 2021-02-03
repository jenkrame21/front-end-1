import React, { Component, useState } from 'react';
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import './App.css';
// import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import ClassesList from './components/ClassesList';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import AddClassForm from './components/AddClassForm'


function App() {

  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem('token'));
  const { push } = useHistory();

  const logout = () => {
    window.localStorage.removeItem('token')
    setLoggedIn(false)
    push('/')
  };

  return (
    <div className="App">
      <NavBar loggedIn={loggedIn} logout={logout}/>
      <Switch>
        <Route path='/about' component={AboutUs}/>
        <Route path='/'>
          <Home setLoggedIn={setLoggedIn}/>
        </Route>
      </Switch>
      <AddClassForm />
      <ClassesList />
    </div>
  );
}

export default App;