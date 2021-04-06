import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../../style/navbar.scss";

class LoginForm extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <panel-content>
          <Form className="full-width">
            <panel-content>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email or username"
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg">
                Submit
              </Button>
            </panel-content>
          </Form>
        </panel-content>
      </React.Fragment>
    );
  }
}

export default LoginForm;
