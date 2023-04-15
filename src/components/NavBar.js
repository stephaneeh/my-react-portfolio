import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from "../assets/img/logo.png";
import logo from "../logo.svg";

export const NavBar = ({ currentPage, handlePageChange }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState("false");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" onClick={() => handlePageChange("Home")} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                currentPage === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handlePageChange("Home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                currentPage === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handlePageChange("About")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={
                currentPage === "portfolio"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => handlePageChange("Portfolio")}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className={
                currentPage === "resume" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handlePageChange("Resume")}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                currentPage === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
