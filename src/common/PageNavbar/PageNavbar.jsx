import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './PageNavbar.css';

export const PageNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(!showRegister);
    setShowLogin(false);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Trail of Bombs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Ranking</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLoginClick}>Login</NavDropdown.Item>
                <NavDropdown.Item onClick={handleRegisterClick}>Register</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={showLogin} onHide={() => setShowLogin(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Login</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='offcanvas-design'>
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
              <Button variant="primary" type="submit">
                Login
              </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={showRegister} onHide={() => setShowRegister(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Register</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='offcanvas-design'>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
              <Button variant="primary" type="submit">
                Register
              </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
