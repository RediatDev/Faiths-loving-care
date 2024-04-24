import "./Header.css";

import { Navbar, Container, Nav } from "react-bootstrap";

import logo from "../../image/logo/logo.png";

import React, { useState } from "react";

function Header() {
 

  return (
    <Navbar expand="lg" className="nave">
      <Container>
        <Navbar.Brand href="/home">
          <img className="Headerlogo" src={logo} alt="company logo "  />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mx-5 pt-4">
          <Nav className="nav ">
       
            <Nav.Link   className="sideSpace c" href='/home'>
              Home
            </Nav.Link>

            <Nav.Link  className="sideSpace c" href="/gallery">
              Gallery
            </Nav.Link>

            <Nav.Link className="sideSpace c" href="/services">
              Services
            </Nav.Link>

            <Nav.Link  className="sideSpace c" href="/about">
              About Us
            </Nav.Link>

            <Nav.Link
              className="glow-on-hover align-items-center text-white text-center"
              href="/contact"
            >
              Contact Us Today
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
