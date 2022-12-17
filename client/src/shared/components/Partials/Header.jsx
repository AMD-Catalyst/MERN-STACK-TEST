import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Header() {
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MERN STACK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/employee">
              Employee
            </Nav.Link>
            <NavDropdown title="Misc" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/about">
                About
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/others">
                Others
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <ButtonGroup aria-label="Basic example">
              <Button as={Link} to="/auth" variant="warning">
                Sign-In
              </Button>
              <Button as={Link} to="/register" variant="danger">
                Register
              </Button>
            </ButtonGroup>

            {/* <Nav.Link as={NavLink} to="/auth">
              Sign-In
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
