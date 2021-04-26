import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../utility/Profile";

import session from "../../util/session.js";

import "../../style/profile.scss";

class PageProfile extends Component {
  state = {
    sessionInterval: null,
  };

  componentDidMount = () => {
    if (session.isReady()) {
      this.setState();
    } else {
      this.state.sessionInterval = setInterval(() => {
        if (session.isReady()) {
          clearInterval(this.state.sessionInterval);
          this.setState();
        }
      }, 10);
    }
  };

  render() {
    return (
      <React.Fragment>
        <CommonNavbar authenticated />
        <div id="profile-container">
          <div id="profile-header">
            <img
              className="photo-border"
              src={process.env.PUBLIC_URL + "/res/img/dummy_user.png"}
              alt="User avatar"
            />
            <div id="profile-username">
              <h1>{session.get().username}</h1>
            </div>
          </div>
          <div id="bio-container-profile" className="justify-content-center">
            <div id="bio-text-container">{session.get().bio}</div>
          </div>
        </div>
        <CommonFooter fixed />
      </React.Fragment>
    );
  }
}

export default PageProfile;
