import React, { useState } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

import CommonFooter from "../common/CommonFooter.jsx";
import Animation from "../utility/Animation-btn.jsx";
import Auth0Btn from "../utility/Auth0Btn.jsx";
import { Redirect } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

import "../../style/landing.scss";

function PageLanding() {
  const [elem, setElem] = useState(0);
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Redirect to="/feed" />
  ) : (
    <React.Fragment>
      <grid-template>
        <grid-image onMouseOver={() => setElem(<div></div>)}>
          <img
            src={process.env.PUBLIC_URL + "res/img/landingpage.svg"}
            alt="React Logo"
            width="100%"
            height="100%"
          />
        </grid-image>
        {elem}
        <btn-login onMouseOver={() => setElem(<Animation />)}>
          <Auth0Btn />
        </btn-login>
        <div id="top-remove" onMouseOver={() => setElem(<div></div>)}></div>
        <div id="bottom-remove" onMouseOver={() => setElem(<div></div>)}></div>
        <div id="right-remoe " onMouseOver={() => setElem(<div></div>)}></div>
      </grid-template>
      <CommonFooter fixed />
    </React.Fragment>
  );
}

export default PageLanding;
