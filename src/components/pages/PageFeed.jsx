import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import NavBar from  "../common/NavBar.jsx";

import '../../style/feed.scss';

class PageFeed extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <NavBar />
            <p>FEED</p>
        </React.Fragment>
      );
    }
}

export default PageFeed;