import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from  "../common/CommonNavbar.jsx";
import CommonFooter from  "../common/CommonFooter.jsx";

import '../../style/profile_provider.scss';

class PageProfileProvider extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <CommonNavbar />
            <p>PROVIDER PROFILE</p>
            <CommonFooter />
        </React.Fragment>
      );
    }
}

export default PageProfileProvider;