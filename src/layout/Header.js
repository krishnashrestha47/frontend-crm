import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };
  return (
    <Navbar className="fw-bold" bg="info" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/tickets" className="nav-link">
              Tickets
            </Link>
            <Nav.Link onClick={logout} className="nav-link">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
