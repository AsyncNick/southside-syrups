import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {Navbar,Nav,Form,Jumbotron,Container,Card,Image,ListGroup,Button,Badge} from "react-bootstrap";

export default function SSJumbotron(props) {
  return (
    <Jumbotron className="jumbo" fluid>
      <Container>
        <br />
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
