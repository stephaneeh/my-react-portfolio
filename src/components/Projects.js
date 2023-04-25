import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import Images
import buddy from "../assets/img/projects/Buddy_up.png";
import portfolio from "../assets/img/projects/First_Portfolio.png";
import quiz from "../assets/img/projects/Lets_Quiz.png";
import generate from "../assets/img/projects/Password_Generator.png";
import travelpedia from "../assets/img/projects/Travelpedia.png";
import techNews from "../assets/img/projects/Your_Tech_News.png";

const ProjectStyle = {
  display: "flex",
  flexWrap: "wrap",
};

export default function Projects() {
  const cardsArr = [
    {
      title: "Buddy Up",
      img: buddy,
      text:
        "Buddy Up is an application developed to give people a place to meet up for a variety of activities",
      link: "",
      skills: "",
    },
    {
      title: "Travelpedia",
      img: travelpedia,
      text:
        "Travelpedia is your favourite travel companion - check out the currency exchange rate and latest news for your destinations",
      link: "",
    },
    {
      title: "Lets Quiz",
      img: quiz,
      text:
        "Lets Quiz is a fun interactive game that lets you test your javascript knowledge to get top spot on the scoreboard",
      link: "",
    },
    {
      title: "Your Tech News",
      img: techNews,
      text:
        "Your Tech News is a Content Management System that allows you to create blog posts, as well as comment on other bloggers posts. ",
      link: "",
    },
    {
      title: "Password Generator",
      img: generate,
      text:
        "This application has been built to help you easily create a random password to ensure your online security is secure",
      link: "",
    },
    {
      title: "My First Portfolio",
      img: portfolio,
      text:
        "This was my very first portfolio, built using only HTML and CSS - this is a great project to show how far i have come in my learning so far!",
      link: "",
    },
  ];

  const cards = cardsArr.map((cardsArr, index) => {
    return (
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={`${cardsArr.img}`}
            alt={`Screenshot of ${cardsArr.title}`}
            className="card-img"
          />
          <Card.Body>
            <Card.Title>{cardsArr.title}</Card.Title>
            <Card.Text>{cardsArr.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return <div style={ProjectStyle}>{cards}</div>;
}
