import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Profile } from "../utility/Profile";
import RedirectIfNeeded from "../utility/RedirectIfNeeded";

import session from "../../util/session.js";

import '../../style/style.scss';

class PageProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <RedirectIfNeeded></RedirectIfNeeded>
        <CommonNavbar authenticated />
        <div id="profile-container">
          <div id="profile-header">
            <img src={session.get().avatar} alt={session.get().username} id="profile-avatar-center"/>
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
