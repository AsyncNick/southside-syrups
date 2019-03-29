import React, { Component } from "react";
import { Container, CardGroup } from "react-bootstrap";
import { SSNav, SSJumbotron, CreateCard } from "./components";
//import { ListOfSyrups } from './ListOfSyrups';

import "./App.css";
/*
 * - launchText
 * - title
 * - body
 */
//import { NewModal } from "./modalComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="App">
            <SSNav />
            <SSJumbotron />
            <CardGroup>
              <CreateCard
                title="About Us"
                subtitle="Based locally in savannah"
                text="some example text"
                body="..."
              />
              <CreateCard
                title="Buy our syrups"
                subtitle="Thinking of buying one of our syrups?"
                text="Buying one of our syrups is super easy. Just email us and we can mail it to you!"
              />
              <CreateCard
                title="Got Questions?"
                subtitle="Want to know more about our syrups or have any feedback?"
                text="Email us at southside.syrups@gmail.com!"
              />
            </CardGroup>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
