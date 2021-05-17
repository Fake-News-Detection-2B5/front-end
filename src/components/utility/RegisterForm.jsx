import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button, Card, Accordion } from "react-bootstrap";

import "../../style/navbar.scss";

class RegisterForm extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Form id="fullview">
          <panel-content>
            <Form.Group controlId="formUsernameRegister" id="inputfullwidth">
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formEmailRegister" id="inputfullwidth">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formPasswordRegister" id="inputfullwidth">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formPasswordConfirm" id="inputfullwidth">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button id="fixed-button" variant="primary" type="submit" size="lg">
              Submit
            </Button>
          </panel-content>
        </Form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;