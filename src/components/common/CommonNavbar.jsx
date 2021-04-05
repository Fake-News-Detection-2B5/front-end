import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import '../../style/navbar.scss';

class CommonNavbar extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <Navbar bg="white" expand="sm" className="sticky-top border-bottom">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img
                            className="image-brand"
                            width="32"
                            height="32"
                            src={process.env.PUBLIC_URL + "/res/img/logo512.png"}
                            alt="Brand"
                            />
                    </Navbar.Brand>
                </LinkContainer>
            </Navbar>
        </React.Fragment>
      );
    }
}

export default CommonNavbar;