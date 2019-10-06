import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const navbarComponent = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="/">University Parking System</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/parkingArea">Paring Area</Nav.Link>
        <Nav.Link href="/myParkingStatus">My Current Parking Status</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/register">Register</Nav.Link>
        {/* <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
    
  </Navbar>
  
);

export default navbarComponent;