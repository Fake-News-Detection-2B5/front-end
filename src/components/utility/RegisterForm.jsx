import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../../style/navbar.scss";

class RegisterForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  render() {
    return (
      <React.Fragment>
        <div id="fullview">
          <panel-content>
            <Form.Group controlId="formUsernameRegister" id="inputfullwidth">
              <Form.Control type="username" placeholder="Enter username" onChange={(e) => {
                  this.setState({username: e.target.value});
              }}/>
            </Form.Group>
            <Form.Group controlId="formEmailRegister" id="inputfullwidth">
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                  this.setState({email: e.target.value});
              }}/>
            </Form.Group>
            <Form.Group controlId="formPasswordRegister" id="inputfullwidth">
              <Form.Control type="password" placeholder="Password" onChange={(e) => {
                  this.setState({password: e.target.value});
              }}/>
            </Form.Group>
            <Form.Group controlId="formPasswordConfirm" id="inputfullwidth">
              <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => {
                  this.setState({confirmPassword: e.target.value});
              }}/>
            </Form.Group>
            <Button id="fixed-button" variant="primary" size="lg" onClick={() => {
              this.props.onSubmit(this.state.username, this.state.email, this.state.password, this.state.confirmPassword);
            }}>
              Submit
            </Button>
          </panel-content>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;