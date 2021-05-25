import React from "react";
import { Redirect } from "react-router";

import session from "../../util/session"

function RedirectIfNeeded() {
  if(!session.isLoaded() || session.isReady()) {
    return (<React.Fragment />);
  }
  else {
    return (
      <Redirect to="/" />
    );
  }
}

export default RedirectIfNeeded;
