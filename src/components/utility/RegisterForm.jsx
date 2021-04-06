import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button, Card, Accordion } from "react-bootstrap";

import "../../style/navbar.scss";

class RegisterForm extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Form>
          <panel-content>
            <Form.Group controlId="formUsernameRegister">
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formEmailRegister">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPasswordRegister">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formPasswordConfirm">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit" size="lg">
              Submit
            </Button>
          </panel-content>
        </Form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;
