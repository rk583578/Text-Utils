// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from 'react-router-dom';

function NavScrollExample(props) {
  return (
    <Navbar bg={props.mode} expand="lg" variant={props.mode}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/"> Text Utils </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Form.Check
            className={`text-${props.mode==='light'?'dark':'light'}`}
            type="switch"
            id="custom-switch"
            label={`Enables ${props.mode==='light'?'Dark':'Light'} Mode`}
            onClick={props.modeChanger}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
