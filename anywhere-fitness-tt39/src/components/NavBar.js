import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const NavBar = ({ loggedIn, logout }) => {
  return (
    <Nav>
      <h1>Anywhere Fitness</h1>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
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
            <Link onClick={logout}>
            <li>Log Out</li>
            </Link>
          }
          <Link to='/about'>
            <li>About Us</li>
          </Link>

          {/*Need role === client too */}
          { loggedIn && 
            <Link to='/user_classes'>
              <li>Saved Classes</li>
            </Link>
          }

        </ul>
      </nav>
    </Nav>
  );
};

export default NavBar;
