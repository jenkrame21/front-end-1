import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import NavigationBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import User from './components/User';
import Instructor from './components/Instructor';

function App(props) {

  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <PrivateRoute path='/instructor' component={Instructor} />
        <PrivateRoute path='/user' component={User} />
        <Route path='/about' component={AboutUs}/>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}


export default App;