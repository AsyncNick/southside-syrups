import React, { Component } from "react";
import {CardGroup, Navbar,Nav,Form,Jumbotron,Container,Card,Image,ListGroup,Button,Badge} from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default function SSNav () {
return (
  <div>
  <Navbar className="nav" expand="lg">
  <Navbar.Brand href="#">Southside Syrups</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
      <Nav className="mr-auto">
        <Nav.Link href="#cardOne">About Us!</Nav.Link>
        <Nav.Link href="###">Syrup List</Nav.Link>
        <Nav.Link>
          <Link to={{ pathname: "../admin/AddProduct" }}>Admin Access</Link>
        </Nav.Link>
      </Nav>
      <Button inline variant="outline-success">
        Login
      </Button>
    </Form>
  </Navbar.Collapse>
  </Navbar>
  </div>
)
}
