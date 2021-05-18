import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import session from "../../util/session";

class Auth extends Component {
  state = {};

  render() {
    if(!session.isLoaded()) {
      return "";
    }
    return session.isReady() ? this.props.children : <Redirect to="/" />;
  }
}

export default Auth;
