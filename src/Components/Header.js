import React from 'react'
import {Navbar,Container,Offcanvas,Nav} from 'react-bootstrap'
import "../Styling/Header.css"

const Header = () => {
    return (
        <div className="header">
            <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="nav-head" id="offcanvasNavbarLabel">Made by ❤️</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link className="github" href="https://github.com/SuperAayush/100-Days-of-Python" target="_blank">Github link to python code.</Nav.Link>
          <Nav.Link className="github" href="https://github.com/SuperAayush/Python-Projects-Site" target="_blank">Github link to this site.</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
