import React, { useState, Component } from "react";
import { Alert, Button, Container, Col, Row } from "react-bootstrap";

import CommonFooter from "../common/CommonFooter.jsx";
import Animation from "../utility/Animation-btn.jsx";
import Auth0Btn from "../utility/Auth0Btn.jsx";
import { Redirect } from "react-router";

import "../../style/style.scss";
import { render } from "@testing-library/react";

import LoginForm from "../utility/LoginForm.jsx";
import RegisterForm from "../utility/RegisterForm.jsx";

import request from "../../util/request";
import session from "../../util/session";

class PageLanding extends Component {
  state = {
    item: null,
    isLogin: true,
    alert: null,
  };

  handleWeakRegex = (pass) => {
    const weakRegex = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,32}$/g;
    // string must containt at least one digit and alphabetical letter with the a minimum length of 8 and a maximum length of 32

    if (!weakRegex.test(pass)) {
      return false;
    }
    return true;
  };

  handleMediumRegex = (pass) => {
    const mediumRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,32}$/g;
    // string must containt at least one digit, one lowercase alphabetical letter and one uppercase alphabetical letter with the a minimum length of 8 and a maximum length of 32

    if (!mediumRegex.test(pass)) {
      return false;
    }

    return true;
  };

  handleStrongRegex = (pass) => {
    const strongRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+\[\]{}<.>/?~])[A-Za-z0-9!@#$%^&*()\-_=+\[\]{}<.>/?~]{8,32}$/g;
    // string must containt one digit, one lowercase alphabetical letter, one uppercase alphabetical letter and one of the specified special characters with the a minimum length of 8 and a maximum length of 32

    if (!strongRegex.test(pass)) {
      return false;
    }

    return true;
  };

  handlePassword = (pass) => {
    if (!this.handleStrongRegex(pass)) {
      if (!this.handleMediumRegex(pass)) {
        if (!this.handleWeakRegex(pass)) {
          return false;
        }
      }
    }
    return true;
  };

  handleMailRegex = (mail) => {
    const mailRegex =
      /(?:(?:\r\n)?[ \t])*(?:(?:(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*\<(?:(?:\r\n)?[ \t])*(?:@(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*(?:,@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*)*:(?:(?:\r\n)?[ \t])*)?(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*\>(?:(?:\r\n)?[ \t])*)|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*:(?:(?:\r\n)?[ \t])*(?:(?:(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*\<(?:(?:\r\n)?[ \t])*(?:@(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*(?:,@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*)*:(?:(?:\r\n)?[ \t])*)?(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*\>(?:(?:\r\n)?[ \t])*)(?:,\s*(?:(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*|(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)*\<(?:(?:\r\n)?[ \t])*(?:@(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*(?:,@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*)*:(?:(?:\r\n)?[ \t])*)?(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.|(?:(?:\r\n)?[ \t]))*"(?:(?:\r\n)?[ \t])*))*@(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*)(?:\.(?:(?:\r\n)?[ \t])*(?:[^()<>@,;:\\".\[\] \000-\031]+(?:(?:(?:\r\n)?[ \t])+|\Z|(?=[\["()<>@,;:\\".\[\]]))|\[([^\[\]\r\\]|\\.)*\](?:(?:\r\n)?[ \t])*))*\>(?:(?:\r\n)?[ \t])*))*)?;\s*)/g;
    // this is the RFC882 Mail Adress Regex
    if (!mailRegex.test(mail)) {
      return false;
    }

    return true;
  };

  handleUsernameRegex = (username) => {
    const usernameRegex =
      /^(?=[a-zA-Z0-9._]{6,32}$)(?!.*[_.]{2})[^_.].*[^_.]$/g;
    /*
      1. Constains only alphanumeric characters, underscore and dot
      2. Underscore and dot cannot be at either the start or end of a username (e.g. .username, _username, username., username_)
      3. Underscore and dot cannnot be next to each other (e.g. user._name, use_.rname)
      4. Underscore or dot cannot be userd multiple times in a row (e.g. user__name, user..name)
      5. Number of characters must be between 6 and 32
    */

    if (!usernameRegex.test(username)) {
      return false;
    }

    return true;
  };

  handleOnLoginSubmit = async (username, password) => {
    if (await session.login(username, password)) {
      this.setState();
      this.forceUpdate();
    } else {
      this.setState({
        alert: (
          <Alert id={"animation"} key={"somekey"} variant={"danger"}>
            Incorrect username or password!
          </Alert>
        ),
      });
      setTimeout(() => {
        this.setState({
          alert: null,
        });
      }, 4000);
    }
  };

  handleOnRegisterSubmit = async (
    username,
    email,
    password,
    confirmPassword
  ) => {
    if (!this.handleUsernameRegex(username)) {
      this.setState({
        alert: (
          <Alert id={"animation"} key={"somekey"} variant={"danger"}>
            Invalid username or username is shorter than 6 characters!
          </Alert>
        ),
      });
      setTimeout(() => {
        this.setState({
          alert: null,
        });
      }, 4000);
      return;
    }

    if (!this.handleMailRegex(email)) {
      this.setState({
        alert: (
          <Alert id={"animation"} key={"somekey"} variant={"danger"}>
            Invalid email!
          </Alert>
        ),
      });
      setTimeout(() => {
        this.setState({
          alert: null,
        });
      }, 4000);
      return;
    }

    if (!this.handlePassword(password)) {
      this.setState({
        alert: (
          <Alert id={"animation"} key={"somekey"} variant={"danger"}>
            Invalid password or password is shorter than 8 characters!
          </Alert>
        ),
      });
      setTimeout(() => {
        this.setState({
          alert: null,
        });
      }, 4000);
      return;
    }

    if (password !== confirmPassword) {
      this.setState({
        alert: (
          <Alert id={"animation"} key={"somekey"} variant={"danger"}>
            Passwords do not match!
          </Alert>
        ),
      });
      setTimeout(() => {
        this.setState({
          alert: null,
        });
      }, 4000);
      return;
    }

    if (await session.register(username, email, password)) {
      this.setState({
        item: <LoginForm onSubmit={this.handleOnLoginSubmit} />,
      });
      this.setState({
        alert: (
          <Alert id={"animation"} key={"somekey"} variant={"success"}>
            Register successfully!
          </Alert>
        ),
      });
      setTimeout(() => {
        this.setState({
          alert: null,
        });
      }, 3000);
      this.forceUpdate();
    } else {
      this.setState({
        alert: (
          <Alert id={"animation"} key={"somekey"} variant={"danger"}>
            Username or email already in use!
          </Alert>
        ),
      });
      setTimeout(() => {
        this.setState({
          alert: null,
        });
      }, 4000);
    }
  };

  componentDidMount = () => {
    this.setState({ item: <LoginForm onSubmit={this.handleOnLoginSubmit} /> });
  };

  handleShowLogin = () => {
    const newItem = <LoginForm onSubmit={this.handleOnLoginSubmit} />;
    this.setState({ item: newItem, isLogin: true });
  };

  handleShowRegister = () => {
    const newItem = <RegisterForm onSubmit={this.handleOnRegisterSubmit} />;
    this.setState({ item: newItem, isLogin: false });
  };

  render() {
    if (!session.isLoaded()) return "";

    if (session.isReady()) return <Redirect to="/feed" />;

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
              <panel-content-wrapper>{this.state.item}</panel-content-wrapper>
            </panelGrid>
          </panel>
          <alertMessage>{this.state.alert}</alertMessage>
        </grid-template>
        <CommonFooter fixed />
      </React.Fragment>
    );
  }
}

export default PageLanding;
