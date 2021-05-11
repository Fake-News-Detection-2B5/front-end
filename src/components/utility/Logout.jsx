import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Logout() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <NavDropdown.Item
        onClick={() => {
          logout({ returnTo: window.location.origin });
          window.location = "/";
        }}
      >
        Logout
      </NavDropdown.Item>
    )
  );
}

export default Logout;
