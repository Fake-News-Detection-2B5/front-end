import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../../style/navbar.scss";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <React.Fragment>
        <panel-content>
          <div id="fullview">
            <panel-content>
              <phantom-div />
              <Form.Group controlId="formEmail" id="inputfullwidth">
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  onChange={(e) => {
                    this.setState({username: e.target.value});
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formPassword" id="inputfullwidth">
                <Form.Control type="password" placeholder="Password" onChange={(e) => {
                  this.setState({password: e.target.value});
              }}/>
              </Form.Group>
              <phantom-div />
              <Button
                variant="primary"
                id="fixed-button"
                size="lg"
                onClick={() => {
                    this.props.onSubmit(this.state.username, this.state.password);
                }}
              >
                Submit
              </Button>
            </panel-content>
          </div>
        </panel-content>
      </React.Fragment>
    );
  }
}

export default LoginForm;