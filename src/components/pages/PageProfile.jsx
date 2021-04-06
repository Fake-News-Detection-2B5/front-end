import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from  "../common/CommonNavbar.jsx";
import CommonFooter from  "../common/CommonFooter.jsx";

import '../../style/profile.scss';

class PageProfile extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <CommonNavbar />
            <p>PROFILE</p>
            <CommonFooter fixed />
        </React.Fragment>
      );
    }
}

export default PageProfile;