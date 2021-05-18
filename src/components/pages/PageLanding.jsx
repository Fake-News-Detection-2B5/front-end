import React, { useState, Component } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

import CommonFooter from "../common/CommonFooter.jsx";
import Animation from "../utility/Animation-btn.jsx";
import Auth0Btn from "../utility/Auth0Btn.jsx";
import { Redirect } from "react-router";

import '../../style/style.scss';
import { render } from "@testing-library/react";

import LoginForm from "../utility/LoginForm.jsx";
import RegisterForm from "../utility/RegisterForm.jsx";

import request from "../../util/request";
import session from "../../util/session";

class PageLanding extends Component {
  state = {
    item: null,
    isLogin: true
  };

  handleOnLoginSubmit = async (username, password) => {
    if(await session.login(username, password)) {
      this.setState();
      this.forceUpdate();
    } else alert("Invalid username/password");
  }

  handleOnRegisterSubmit = async (username, email, password, confirmPassword) => {
    if(password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if(await session.register(username, email, password)) {
      window.location.reload();
    }
  };

  componentDidMount = () => {
    this.setState({item: <LoginForm onSubmit={this.handleOnLoginSubmit} />});
  }

  handleShowLogin = () => {
    const newItem = <LoginForm onSubmit={this.handleOnLoginSubmit} />;
    this.setState({ item: newItem, isLogin: true });
    console.log("Updating!");
  }

  handleShowRegister = () => {
    const newItem = <RegisterForm onSubmit={this.handleOnRegisterSubmit} />;
    this.setState({ item: newItem, isLogin: false });
    console.log("Updating!");
  };

  render() {
    if(!session.isLoaded())
      return "";
      
    if(session.isReady())
      return <Redirect to="/feed"/>;

  return (
    <React.Fragment>
      <grid-template>
        <grid-image>
          <img
            src={"../../../res/img/landingpage.svg"}
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
                {this.state.item}
              </panel-content-wrapper>
            </panelGrid>
          </panel>
      </grid-template>
      <CommonFooter fixed />
    </React.Fragment>);
  }
}

export default PageLanding;
