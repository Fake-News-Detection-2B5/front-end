import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import '../../style/navbar.scss';

class CommonNavbar extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <Navbar id="navbar" bg="white" expand="sm" className="sticky-top border-bottom">
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
                {
                    this.props.authenticated ?
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <NavDropdown title={
                                    <React.Fragment>
                                        <img
                                            className="image-brand"
                                            width="32"
                                            height="32"
                                            src={process.env.PUBLIC_URL + "/res/img/logo512.png"}
                                            alt="Username"
                                        />
                                        <span id="username">
                                            Username
                                        </span>
                                    </React.Fragment>}
                                >
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/settings">
                                        <NavDropdown.Item>
                                            Settings
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    : ""
                }
            </Navbar>
        </React.Fragment>
      );
    }
}

export default CommonNavbar;