import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

import Auth from '../utils/auth';
import { Link } from 'react-router-dom';


const NavBar = () => {


  return (
   
    <>
         <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          {/* <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'> */}
            <Nav className='ml-auto d-flex'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/dashboard'>
                    Dashboard
                  </Nav.Link>
                </>
              ): (
                <></>
              )}
              <Nav.Link as={Link} to='/calories'>
                Count Calories
              </Nav.Link>
              <Nav.Link as={Link} to='/about-us'>
                About Us
              </Nav.Link>
            </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
