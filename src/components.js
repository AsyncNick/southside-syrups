/*** components.js *
 ** -- Read this article on React-Router: http://tiny.cc/39jl4y
 **/
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  Jumbotron,
  Container,
  Card,
  Image,
  ListGroup,
  Button,
  Badge
} from "react-bootstrap";
/*
 * - launchText
 * - title
 * - body
 */
import { NewModal } from "./modalComponent";
import Store from "./store/Store";
import AddProduct from "./Admin/AddProduct";

/**
 * reusable nonexportable functions
 **/
export function gen(id, name, price, oz, inStock) {
  return { id: id, name: name, price: price, oz: oz, inStock: inStock };
}
/***
 * exported variables
 **/
export const missionStatement = `Our mission is to bring Savannah the best tasting
syrups that you could use for coffee or tea or even baking. We use organic sugars and flavorings to bring you
the best product ever!`;
/** Where all the syrups are stored
 * - id, name, price, oz required
 **/
export var syrupList = [
  { id: 1, name: "Vaalmond", price: 15, oz: 6, inStock: true },
  { id: 2, name: "Classic Hazelnut", price: 16, oz: 6, inStock: true },
  { id: 3, name: "Lavender", price: 17, oz: 8, inStock: false }
];
//test
syrupList.push(gen(4, "Candied Almonds", 15, 8, true));
/***
 * Exported Functions used in order
 *
 <Router>
    <div>
      <Link to="/">Home</Link>{' '}
      <Link to={{pathname: '/about'}}>About</Link>{' '}
      <Link to="/contact">Contact</Link>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/contact"
          render={() => <h1>Contact Us</h1>} />
        <Route path="/blog" children={({match}) => (
          <li className={match ? 'active' : ''}>
            <Link to="/blog">Blog</Link>
          </li>)} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
 **/
export function SSNav(props) {
  return (
    <Navbar className="nav" expand="lg">
      <Router>
        <Navbar.Brand href="#">Southside Syrups</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <Nav className="mr-auto">
              <Nav.Link href="#cardOne">About Us!</Nav.Link>
              <Nav.Link href="###">Syrup List</Nav.Link>
              <Nav.Link href="#CardThree">
                <Link to={{ pathname: "/Admin/AddProduct" }}>Admin Access</Link>
              </Nav.Link>
            </Nav>
            <Button inline variant="outline-success">
              Login
            </Button>
          </Form>
        </Navbar.Collapse>
        <Switch>
          <Route path="/Admin/AddProduct" component={AddProduct} />
        </Switch>
      </Router>
    </Navbar>
  );
}
export function SSJumbotron(props) {
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
export function CreateCard(props) {
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
export function renderSyrups() {
  return (
    <ListGroup variant="info">
      {syrupList.map(syrup => (
        <ListGroup.Item className="syrupLI" key={syrup.key} action>
          <Badge variant={syrup.inStock ? "success" : "danger"}>
            {syrup.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
          {syrup.name}: ${syrup.price}, Oz:{syrup.oz}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export function LargeImg(props) {
  return <Image src={props.src} fluid />;
}
