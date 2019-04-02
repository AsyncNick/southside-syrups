import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

import AddProduct from "./Admin/AddProduct";

export class NewModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  handlePurchase() {
    return (
      <Router>
        <div>
          <Route path="./AddProduct" component={AddProduct} />
        </div>
      </Router>
    );
  }
  render() {
    const props = this.props;
    return (
      <>
        <Button className="yellow" onClick={this.handleShow}>
          {props.launchText}
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handlePurchase}>
              Purchase
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
