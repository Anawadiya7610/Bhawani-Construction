import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logoimg from "./real.jpg";
import "./styles.css";
import { Link } from "react-router-dom";
function Navbarboot() {
  return (
    <Navbar bg="blue" expand="lg" className="navfont"   >
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img className="logoimg" src={Logoimg} alt="Logo image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" className="marauto">
            <Nav.Link className="am"  as={Link} to={"/"}> 
              Home
            </Nav.Link>

            <NavDropdown title="About" className="am" id="basic-nav-dropdown" >
              <NavDropdown.Item  className="drop" as={Link} to={"/vision"}>
                Vision
              </NavDropdown.Item>
              <NavDropdown.Item className="drop"  as={Link} to={"/client"}>
                Client
              </NavDropdown.Item>
              <NavDropdown.Item className="drop" as={Link} to={"/download"}>
                Download
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="am" as={Link} to={"/resources"}>
              Resources
            </Nav.Link>

            <NavDropdown title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item className="drop" as={Link} to={"/running"}>
                Running Project
              </NavDropdown.Item>
              <NavDropdown.Item className="drop" as={Link} to={"/complete"}>
                Completed Project
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="am" as={Link} to={"/contact"}>
              Contact Us
            </Nav.Link>

            <Nav.Link className="am" as={Link} to={"/career"}>
              Career
            </Nav.Link>

            <NavDropdown title="People" id="basic-nav-dropdown">
              <NavDropdown.Item className="drop" as={Link} to={"/director"}>
                Director
              </NavDropdown.Item>
              <NavDropdown.Item className="drop" as={Link} to={"/general"}>
                General Manager
              </NavDropdown.Item>
              <NavDropdown.Item className="drop" as={Link} to={"/manager"}>
                Project Manager
              </NavDropdown.Item>
              <NavDropdown.Item className="drop" as={Link} to={"/engineer"}>
                Project Engineer
              </NavDropdown.Item>
              <NavDropdown.Item className="drop" as={Link} to={"/quality"}>
                Quality Contral
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarboot;
