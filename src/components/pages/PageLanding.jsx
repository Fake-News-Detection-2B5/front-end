import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import NavBar from  "../common/NavBar.jsx";

import '../../style/landing.scss';

class PageLanding extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <NavBar />
            <p>LANDING</p>
        </React.Fragment>
      );
    }
}

export default PageLanding;