import React, { useState } from 'react';
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
import User from './components/User';
import Instructor from './components/Instructor';
import UserSavedClasses from './components/UserSavedClasses';


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
        <Route path='/instructor' component={Instructor} />
        <Route path='/user' component={User} />
        <Route path='/about' component={AboutUs} />
        <Route path='/user_classes' component={UserSavedClasses} />
        <Route path='/'>
          <Home setLoggedIn={setLoggedIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;