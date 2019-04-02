import React, { Component } from "react";
import {CardGroup, Navbar,Nav,Form,Jumbotron,Container,Card,Image,ListGroup,Button,Badge} from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// Components
import CreateCard from './components/CreateCard';
import SSJumbotron from './components/SSJumbotron';
// Admin
import AddProduct from "./admin/AddProduct";

import "./App.css";
/*
 * - launchText
 * - title
 * - body
 */
import { NewModal } from "./modalComponent";

var syrupList = [
  { id: 1, name: "Vaalmond", price: 15, oz: 6, inStock: true },
  { id: 2, name: "Classic Hazelnut", price: 16, oz: 6, inStock: true },
  { id: 3, name: "Lavender", price: 17, oz: 8, inStock: false }
]
const missionStatement = `Our mission is to bring Savannah the best tasting
syrups that you could use for coffee or tea or even baking. We use organic sugars and flavorings to bring you
the best product ever!`;

class App extends Component {
  constructor(props) {
    super(props);
    this.setState({
      show: false
    });
  }
  renderSyrups() {
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
  render() {
    return (
      <div>
        <Container>
          <div className="App">
          <Navbar className="nav" expand="lg">
            <Router>
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
              <Switch>
                <Route path="../admin/AddProduct" component={AddProduct} />
              </Switch>
            </Router>
          </Navbar>
            <SSJumbotron />
            <CardGroup>
              <CreateCard
                title="Got Questions?"
                subtitle="Want to know more about our syrups or have any feedback?"
                text="Email us at southside.syrups@gmail.com!"
                id="cardThree"
              />
              <CreateCard
                title="About Us"
                subtitle="Based locally in savannah"
                text={missionStatement}
                body="..."
                id="cardOne"
              />

              <CreateCard
                title="Buy our syrups"
                subtitle="Thinking of buying one of our syrups?"
                text={
                  <NewModal
                    launchText="View our syrups"
                    title="Current Syrup List"
                    body={this.renderSyrups()}
                  />
                }
                id="cardTwo"
              />
            </CardGroup>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
