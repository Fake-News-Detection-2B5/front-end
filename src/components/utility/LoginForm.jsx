import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "../../style/navbar.scss";

class LoginForm extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <panel-content>
          <Form id="fullview">
            <panel-content>
              <phantom-div />
              <Form.Group controlId="formEmail" id="inputfullwidth">
                <Form.Control
                  type="email"
                  placeholder="Enter email or username"
                />
              </Form.Group>
              <Form.Group controlId="formPassword" id="inputfullwidth">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <phantom-div />
              <LinkContainer to="/feed">
              <Button
                variant="primary"
                id="fixed-button"
                type="submit"
                size="lg"
              >
                Submit
              </Button>
              </LinkContainer>
            </panel-content>
          </Form>
        </panel-content>
      </React.Fragment>
    );
  }
}

export default LoginForm;
