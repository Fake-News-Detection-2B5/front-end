import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";

function RedirectIfNeeded() {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? "" : <Redirect to="/" />
  );
}

export default RedirectIfNeeded;