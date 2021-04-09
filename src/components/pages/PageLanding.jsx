import React, { Component } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

import CommonFooter from "../common/CommonFooter.jsx";
import LoginForm from "../utility/LoginForm.jsx";
import RegisterForm from "../utility/RegisterForm.jsx";

import "../../style/landing.scss";

class PageLanding extends Component {
  state = {
    item: [<LoginForm />],
    isLogin: true,
  };

  handleShowLogin = () => {
    const newItem = [<LoginForm />];
    this.setState({ item: newItem, isLogin: true });
    console.log("Updating!");
  };

  handleShowRegister = () => {
    const newItem = [<RegisterForm />];
    this.setState({ item: newItem, isLogin: false });
    console.log("Updating!");
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <grid-template>
          <grid-image>
            <img
              src={process.env.PUBLIC_URL + "res/img/landingpage.svg"}
              alt="React Logo"
              width="100%"
              height="100%"
            />
          </grid-image>
          <panel>
            <panelGrid>
              <btn-login>
                <Button
                  id="button-radius-left"
                  onClick={this.handleShowLogin}
                  type="button"
                  variant={this.state.isLogin ? "success" : "secondary"}
                  size="lg"
                  block
                >
                  Login
                </Button>
              </btn-login>
              <btn-register>
                <Button
                  id="button-radius-right"
                  onClick={this.handleShowRegister}
                  type="button"
                  variant={this.state.isLogin ? "secondary" : "success"}
                  size="lg"
                  block
                >
                  Register
                </Button>
              </btn-register>
              <panel-content-wrapper>
                {this.state.item[0]}
              </panel-content-wrapper>
            </panelGrid>
          </panel>
        </grid-template>
        <CommonFooter fixed />
      </React.Fragment>
    );
  }
}

export default PageLanding;
