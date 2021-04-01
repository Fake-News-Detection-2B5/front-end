import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from  "../common/CommonNavbar.jsx";
import CommonFooter from  "../common/CommonFooter.jsx";

import '../../style/landing.scss';

class PageLanding extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <CommonNavbar />
            <p>LANDING</p>
            <CommonFooter />
        </React.Fragment>
      );
    }
}

export default PageLanding;