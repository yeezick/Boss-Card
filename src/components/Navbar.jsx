import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function BSNavbar() {
  return (
    <Navbar
      className="nav-container"
      fixed="top"
      bg="dark"
      variant="dark"
      expand="md"
    >
      <LinkContainer to="/">
        <Navbar.Brand className="nav-header">iNetwork</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="ml-auto" id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link className="nav-text nav-link">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create">
            <Nav.Link className="nav-text nav-link">Create</Nav.Link>
          </LinkContainer>
          <LinkContainer to="products">
            <Nav.Link className="nav-text nav-link">Products</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default BSNavbar;
