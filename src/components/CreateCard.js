import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {Navbar,Nav,Form,Jumbotron,Container,Card,Image,ListGroup,Button,Badge} from "react-bootstrap";

export default function CreateCard(props) {
  return (
    <Card className="singleCard" id={props.id} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
