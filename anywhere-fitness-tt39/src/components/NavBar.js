import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import styled from "styled-components";
import { logout } from '../actions';

const Nav = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  nav {
    width:25%;
  }
  ul{
    display: flex;
    justify-content:space-between;
  }
  li {
    list-style: none;
  }

`

const NavBar = ({ loggedIn, logout, role }) => {
  const { push } = useHistory();
  const handleLogout = () => {
    logout();
    push('/')
  }
  return (
    <Nav>
      <h1>Anywhere Fitness</h1>
      <nav>
        <ul>
          
          { !loggedIn &&
            <Link to='/'>
            <li>Home</li>
          </Link>}

          { (role === 'instructor') &&
            <Link to='/instructor'>
              <li>My Classes</li>
            </Link>
          } 
          { (role === 'client') &&
            <Link to='/user'>
              <li>My Classes</li>
            </Link>
          } 
          { !loggedIn &&
            <Link to='signup'>
              <li>SignUp</li>
            </Link>
          } 
          { !loggedIn &&
            <Link to='/login'>
              <li>Log In</li>
            </Link>
          }
          { loggedIn &&
            <Link onClick={handleLogout}>
            <li>Log Out</li>
            </Link>
          }
          <Link to='/about'>
            <li>About Us</li>
          </Link>
        </ul>
      </nav>
    </Nav>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.user.isLoggedIn,
    role: state.user.user.role
  }
}

export default connect(mapStateToProps, { logout })(NavBar);
