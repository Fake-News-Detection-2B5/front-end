import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logout from "../utility/Logout.jsx";
import SearchBar from "../utility/SearchBar.jsx";
import '../../style/style.scss';

import session from "../../util/session.js";

class CommonNavbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar
          id="navbar"
          bg="white"
          expand="sm"
          className="sticky-top border-bottom"
        >
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                className="image-brand rounded-img shadow-img"
                width="32"
                height="32"
                src={process.env.PUBLIC_URL + "/res/img/logo512.png"}
                alt="Brand"
              />
            </Navbar.Brand>
          </LinkContainer>
          {this.props.authenticated ? (
            this.props.withSearch ? (
              <React.Fragment>
                
                <SearchBar />
              
                <Navbar.Collapse>
                  <Nav className="ml-auto">
                    <NavDropdown
                      title={
                        session.isReady() ?
                          <React.Fragment>
                            <img
                              className="image-brand"
                              width="32"
                              height="32"
                              src={session.get().avatar}
                              alt={session.get().username}
                            />
                            <span id="username">{session.get().username}</span>
                          </React.Fragment>
                          : ""
                      }
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/settings">
                        <NavDropdown.Item>Settings</NavDropdown.Item>
                      </LinkContainer>

                      <Logout />
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                </React.Fragment>
            ) : (
              <Navbar.Collapse>
                <Nav className="ml-auto">
                  <NavDropdown
                    title={
                      session.isReady() ?
                        <React.Fragment>
                          <img
                            className="image-brand"
                            width="32"
                            height="32"
                            src={session.get().avatar}
                            alt={session.get().username}
                          />
                          <span id="username">{session.get().username}</span>
                        </React.Fragment>
                        : ""
                    }
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/settings">
                      <NavDropdown.Item>Settings</NavDropdown.Item>
                    </LinkContainer>

                    <Logout />
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            )
          ) : (
            ""
          )}
        </Navbar>
      </React.Fragment>
    );
  }
}

export default CommonNavbar;
