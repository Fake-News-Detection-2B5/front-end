import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import NavBar from  "../common/NavBar.jsx";

import '../../style/profile.scss';

class PageProfile extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <NavBar />
            <p>PROFILE</p>
        </React.Fragment>
      );
    }
}

export default PageProfile;