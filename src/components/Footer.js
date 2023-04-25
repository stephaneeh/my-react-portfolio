import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import github from "../assets/img/github.png";
import twitter from "../assets/img/twitter.png";

export const Footer = () => {
  const imageStyle = { width: 30, height: 30, margin: 10 };

  return (
    <footer>
      {/* <footer className="fixed-bottom"> */}
      <Row>
        <p className="bkg-text">{"<stephaneeh/>"}</p>
      </Row>

      <div>
        <Row className="footer items-center justify-center">
          <Col>
            <img
              style={imageStyle}
              src={github}
              alt="Logo"
              onClick={() => {
                window.location.href = "https://github.com/stephaneeh";
              }}
              className="footer-img"
            />
            <img
              style={imageStyle}
              src={twitter}
              alt="Logo"
              onClick={() => {
                window.location.href = "https://twitter.com/Stephanee_h";
              }}
              className="footer-img"
            />
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
