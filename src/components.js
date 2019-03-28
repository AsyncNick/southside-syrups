// components.js
import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Jumbotron,
  Container,
  Card
} from "react-bootstrap";
/**
 * reusable nonexportable functions
 **/


/***
 * Exported Functions used
 *
 **/
export function SSNav(props) {
  return (
    <Navbar className="nav" fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="#home">Southside Syrups</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#syrups">List of Syrups</Nav.Link>
          <Nav.Link href="purchase"> How to Purchase </Nav.Link>
        </Nav>
        <Form inline>
          <Button onClick={props.handleEvent} variant="outline-success">Login</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export function SSJumbotron(props) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 style={{ textAlign: "center" }}> Southside Syrups </h1>
        <p style={{ textAlign: "center" }}>
          <br />
          One of Savannah's most interesting syrup sellers on the market. With
          the most creative flavors and the least amount of excess sugar and
          preservates.
        </p>
      </Container>
    </Jumbotron>
  );
}
export function CreateCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
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
