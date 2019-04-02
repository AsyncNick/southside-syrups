/** AddProduct.js
- Components needed
  - form to input the requirements for gen()
  - then that needs to update in the main option
**/
import React, { Component } from 'react';
import {Container, Form, Button} from 'react-bootstrap';

import App from '../App';

//id, name, price, oz, inStock
export default function AddProduct (props) {
  return (
  <div>
    <h1>Admin</h1>
    <Container>
      <Form>
      <Form.Group controlId="SyrupInput">
        <Form.Label>Enter new Syrup Product Name</Form.Label>
          <Form.Control type="syrup" placeholder="Enter a cool name" />
      </Form.Group>
      <Form.Group controlId="PriceInput">
        <Form.Label>Enter the price</Form.Label>
          <Form.Control type="price" placeholder="Enter a price" />
      </Form.Group>
      <Form.Group controlId="OzInput">
        <Form.Label>Enter the Oz the container holds</Form.Label>
          <Form.Control type="syrup" placeholder="Enter the ozs without the words 'ozs'" />
      </Form.Group>
      <Form.Group controlId="StockInput">
        <Form.Label>Enter quantity on hand</Form.Label>
          <Form.Control type="stock" placeholder="Enter the quantity on hand" />
      </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
    Submit
    </Button>
    </Container>
  </div>
    )
}
