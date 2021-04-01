import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from  "../common/CommonNavbar.jsx";
import CommonFooter from  "../common/CommonFooter.jsx";

import '../../style/settings.scss';

class PageSettings extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <CommonNavbar />
            <p>SETTINGS</p>
            <CommonFooter />
        </React.Fragment>
      );
    }
}

export default PageSettings;