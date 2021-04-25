import React, { Component } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

import CommonFooter from "../common/CommonFooter.jsx";
import Animation from "../utility/Animation-btn.jsx";

import "../../style/landing.scss";

class PageLanding extends Component {
  state = {
    elem: <div></div>,
  };

  handleAnimation = () => {
    const newItem = <div id="fancy-btn"></div>;
    this.setState({ elem: newItem });
    console.log("Se intampla ceva!");
  };

  handleAnimationOff = () => {
    const newItem = <div></div>;
    this.setState({ elem: newItem });
  };

  render() {
    return (
      <React.Fragment>
        <grid-template>
          <grid-image onMouseOver={this.handleAnimationOff}>
            <img
              src={process.env.PUBLIC_URL + "res/img/landingpage.svg"}
              alt="React Logo"
              width="100%"
              height="100%"
            />
          </grid-image>
          {this.state.elem}
          <btn-login onMouseOver={this.handleAnimation}>
            <Button id="btn-heigth" type="button" size="lg" block>
              Login or Register
            </Button>
          </btn-login>
          <div id="top-remove" onMouseOver={this.handleAnimationOff}></div>
          <div id="bottom-remove" onMouseOver={this.handleAnimationOff}></div>
          <div id="right-remoe " onMouseOver={this.handleAnimationOff}></div>
        </grid-template>
        <CommonFooter fixed />
      </React.Fragment>
    );
  }
}

export default PageLanding;
