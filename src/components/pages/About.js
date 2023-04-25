import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import self from "../../assets/img/self.png";

export default function About() {
  const imageStyle = { width: 240, height: 210 };
  return (
    <Container className="container">
      <Row className="justify-content-md-center text-center">
        <img style={imageStyle} src={self} alt="Self-portrait" />
        <h1>Hey there! My name is Steph</h1>
        <p>
          A Full Stack Web Development student with a passion for creating cool
          things. With over 6 years experience in IT Operations, i can't wait to
          be able to get stuck in and build awesome applications.
        </p>
      </Row>
    </Container>
  );
}
