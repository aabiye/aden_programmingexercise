import React from "react";
import "../style/style.css";
import logo from "../assets/logo2.PNG";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <>
      <>
        <Navbar variant="dark" className="navbar">
          <Navbar.Brand href="/">
            <span>
              <img className="logoimage" src={logo} />
            </span>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/member">Member</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </>
     
    </>
  );
};

export default Header;
