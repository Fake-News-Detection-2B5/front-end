import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../utility/Profile";

import session from "../../util/session.js";

import "../../style/profile.scss";

const PageProfile = () => {
  var { sessionInterval } = useState(0);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (!session.isReady()) {
      sessionInterval = setInterval(() => {
        if (session.isReady()) {
          clearInterval(sessionInterval);
        }
      }, 10);
    }
  }, []);

  return (
    <React.Fragment>
      <CommonNavbar authenticated />
      {isAuthenticated ? 
      <div id="profile-container">
        <div id="profile-header">
          <img src={user.picture} alt={user.name}/>
          <div id="profile-username">
            <h1>{user.name}</h1>
          </div>
        </div>
        <div id="bio-container-profile" className="justify-content-center">
          <div id="bio-text-container">{session.get().bio}</div>
        </div>
      </div>
      : "" }
      <CommonFooter fixed />
    </React.Fragment>
  );
}

export default PageProfile;
