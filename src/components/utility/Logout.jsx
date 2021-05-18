import React , { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import session from "../../util/session";

class Logout extends Component {
  
  render() {
    return (
      session.isReady() && (
        <NavDropdown.Item
          onClick={async () => {
            if(await session.logout()) {
              window.location = "/";
            }
            else {
              alert("Error at logout");
            }
          }}
        >
          Logout
        </NavDropdown.Item>
      )
    );
  }
}

export default Logout;
