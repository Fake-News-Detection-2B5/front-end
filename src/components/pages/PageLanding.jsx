import React, { useState } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

import CommonFooter from "../common/CommonFooter.jsx";
import Animation from "../utility/Animation-btn.jsx";
import Auth0Btn from "../utility/Auth0Btn.jsx";
import { Redirect } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

import "../../style/landing.scss";

function PageLanding() {
  const [elem, setElem] = useState();
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Redirect to="/feed" />
  ) : (
    <React.Fragment>
      <grid-template>
        <grid-image onMouseOver={() => setElem(<div></div>)}>
          <img
            src={"../../../res/img/landingpage.svg"}
            alt="React Logo"
            width="100%"
            height="100%"
          />
        </grid-image>
        {elem}
        <btn-login onMouseOver={() => setElem(<Animation />)}>
          <Auth0Btn />
        </btn-login>
        <div id="top-remove" onMouseOver={() => setElem(<div></div>)}>
          <div id="info">
            {/* 
            <img
              id="website-logo"
              className="rounded-img"
              src={process.env.PUBLIC_URL + "/res/img/logo512.png"}
              alt="brand logo"
            />
           */}
            <h1 id="title-fnd">
              <b>Fake News Detection</b>
            </h1>
          </div>
          <div id="info-bottom">
            <h2>Welcome!</h2>
            <h3>Please login or register to continue...</h3>
          </div>
        </div>
        <div id="left-remove" onMouseOver={() => setElem(<div></div>)}></div>
        <div id="bottom-remove" onMouseOver={() => setElem(<div></div>)}></div>
        <div id="right-remove" onMouseOver={() => setElem(<div></div>)}></div>
      </grid-template>
      <CommonFooter fixed />
    </React.Fragment>
  );
}

export default PageLanding;
