import React from 'react';
import "./Navmybar.css"
import Button from "react-bootstrap/Button"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

function Navmybar() {
    return (
    <div style={{
      color: "red",
      background: "black",
    }}>
      <Navbar bg="dark" variant="dark">
 
    <NavDropdown className="row" title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item className="col s8" href="#home" >Action</NavDropdown.Item>
        <NavDropdown.Item className="cols s4" href="#home">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#home">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#home">Separated link</NavDropdown.Item>
      </NavDropdown>
    
  </Navbar>
  <br />
  <Navbar  className="row" bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="row col s12">
      <Nav.Link href="#home" className="col s8" style={{border:"2px solid black"}}>Home</Nav.Link>
      <Nav.Link href="#features" className="col s4">Features</Nav.Link>
      <Nav.Link href="#pricing" className="col s4">Pricing</Nav.Link>
    </Nav>
   
  </Navbar>

  <br />
  <Navbar bg="light" variant="light" className="hide-on-large-only">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#home">Features</Nav.Link>
      <Nav.Link href="#home">Pricing</Nav.Link>
    </Nav>
  </Navbar>
  <Button>ok</Button>

    </div>
    )
  }
  
  export default Navmybar;