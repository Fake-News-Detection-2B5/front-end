import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import NavBar from  "../common/NavBar.jsx";

import '../../style/settings.scss';

class PageSettings extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <NavBar />
            <p>SETTINGS</p>
        </React.Fragment>
      );
    }
}

export default PageSettings;