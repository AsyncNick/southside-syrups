import React, { Component } from "react";
import { Container, CardGroup } from "react-bootstrap";
import {
  SSNav,
  SSJumbotron,
  CreateCard,
  renderSyrups,
  syrupList,
  missionStatement
} from "./components";
import AddProduct from "./Admin/AddProduct";

import "./App.css";
/*
 * - launchText
 * - title
 * - body
 */
import { NewModal } from "./modalComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.setState({
      show: false
    });
  }
  render() {
    return (
      <div>
        <Container>
          <div className="App">
            <SSNav />
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
                    body={renderSyrups()}
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
