import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import styled from 'styled-components'
import { connect } from 'react-redux'

const HomeDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2%;
  section {
    width: 40%;
  }
  p::selection{
    color: #fd5549;
    text-shadow:1px 1px black;
  }
  
`

const Home = (props) => {
  const { push } = useHistory()
  console.log('am i logged in: ', props.loggedIn)
  useEffect(() => {
    if (props.role === 'client') {
      push('/user')
    } else if (props.role === 'instructor') {
      push('/instructor')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.role])

  if (props.isLoggedIn) {
    return <h1>Loading...</h1>
  }

  return (
    <HomeDiv>
      <section>
        <p>Welcome to Anywhere Fitness!</p>
        <p>
          We are the premier app for connecting fitness entrepreneurs, and
          people tired of mainstream gym/exercise locales.
        </p>
        <p>
          Signing up is free. Sign up now to see how we can change your life!
        </p>
      </section>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
    </HomeDiv>
  )
}
const mapStateToProps = (state) => {
  return {
    role: state.user.user.role,
    loggedIn: state.user.isLoggedIn,
  }
}

export default connect(mapStateToProps, {})(Home)
