import React from "react";
import { Container, Row } from "react-bootstrap";
import Projects from "../Projects";

export default function Portfolio() {
  return (
    <Container>
      <Row className="text-center">
        <h1 style={{ marginTop: 20, marginBottom: 50 }}>
          Check out some of my work below!
        </h1>
      </Row>
      <Row>
        <Projects />
      </Row>
    </Container>
  );
}
