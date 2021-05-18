import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logout from "../utility/Logout.jsx";
import SearchBar from "../utility/SearchBar.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import '../../style/style.scss';

import session from "../../util/session.js";

const CommonNavbar = (props) => {
  var { sessionInterval } = useState(0);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (!session.isReady()) {
      sessionInterval = setInterval(() => {
        if (session.isReady()) {
          clearInterval(sessionInterval);
        }
      }, 10);
    }
  }, []);

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
        {props.authenticated ? (
          props.withSearch ? (
            <React.Fragment>
              
              <SearchBar />
            
              <Navbar.Collapse>
                <Nav className="ml-auto">
                  <NavDropdown
                    title={
                      isAuthenticated ?
                        <React.Fragment>
                          <img
                            className="image-brand"
                            width="32"
                            height="32"
                            src={user.picture}
                            alt={user.name}
                          />
                          <span id="username">{user.name}</span>
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
                    isAuthenticated ?
                      <React.Fragment>
                        <img
                          className="image-brand"
                          width="32"
                          height="32"
                          src={user.picture}
                          alt={user.name}
                        />
                        <span id="username">{user.name}</span>
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

export default CommonNavbar;
