import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";

export const NavBar = ({ currentPage, handlePageChange }) => {
  function navActive(pageName) {
    return currentPage === pageName ? " navigation-active " : "navigation ";
  }
  const logoStyle = { width: 150, height: 80, marginBottom: 20 };
  // const colStyle = { width: auto };
  return (
    <Navbar className="flex-column">
      <Row>
        <img
          style={logoStyle}
          src={logo}
          alt="Logo"
          onClick={() => handlePageChange("About")}
        />
      </Row>
      <Row className="container">
        <Col>
          <Nav.Link
            href="#about"
            className={navActive("About")}
            onClick={() => handlePageChange("About")}
          >
            About Me
          </Nav.Link>
        </Col>
        <Col>
          <Nav.Link
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={navActive("Portfolio")}
          >
            Portfolio
          </Nav.Link>
        </Col>
        <Col>
          <Nav.Link
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={navActive("Resume")}
          >
            Resume
          </Nav.Link>
        </Col>
        <Col>
          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={navActive("Contact")}
          >
            Contact
          </Nav.Link>
        </Col>
      </Row>
    </Navbar>
  );
};

export default NavBar;
