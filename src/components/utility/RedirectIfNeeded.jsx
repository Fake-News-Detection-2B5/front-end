import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";
import { wait } from "@testing-library/dom";

import session from "../../util/session"

function RedirectIfNeeded() {
  if(!session.isLoaded() || session.isReady())
      return "";

  return (
    <Redirect to="/" />
  );
}

export default RedirectIfNeeded;
