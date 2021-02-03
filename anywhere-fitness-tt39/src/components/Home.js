import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import styled from 'styled-components';

const HomeDiv = styled.div ` 
  display: flex;
  /* align-items: center; */
  justify-content: center;

  section {
    width: 50%;
  }
`

const Home = ({ setLoggedIn }) => {
  return (
    <HomeDiv>
      <section>
        <h1>Anywhere Fitness</h1>
        <p>Welcome to Anywhere Fitness! We are the premier app for connecting fitness entrepreneurs, and people tired of mainstream gym/exercise locales.</p>
        <p>Signing up is free. Sign up now to see how we can change your life!</p>
      </section>
      
      <Route exact path='/'>
        <LoginForm setLoggedIn={setLoggedIn}/>
      </Route>
      <Route path='/login' component={LoginForm}/>
      <Route path= '/signup' component={SignUpForm} />
    
      </HomeDiv>
  );
}

export default Home;
