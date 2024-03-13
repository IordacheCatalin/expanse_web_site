import React from "react";
import style from "../Navbar/Navbar.module.scss";
import "../Navbar/Navbar.css"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarIc = () => {
  return (
    <React.Fragment>
      <Navbar>
        <Container className={`${style.navContainer} ${style.navBarIc}`}>
          <Navbar.Brand href="#home"  className={`${style.navLink} ${style.navBarIc}`}>Navbar</Navbar.Brand>
          <Nav>
            {/* <Nav.Link href="#home" className={`${style.navLink} ${style.navBarIc}`}>Home</Nav.Link> */}
            <Nav.Link href="#aboutUs" className={`${style.navLink} ${style.navBarIc}`}>About Us</Nav.Link>
            <Nav.Link href="#contact" className={`${style.navLink} ${style.navBarIc}`}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
    </React.Fragment>
  );
};

export default NavbarIc;
