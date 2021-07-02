import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function BSNavbar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="/">Boss Card</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create">
            <Nav.Link>Create</Nav.Link>
          </LinkContainer>
          <LinkContainer to="products">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default BSNavbar;
