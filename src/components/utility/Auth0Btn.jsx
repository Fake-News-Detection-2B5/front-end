import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Col, Row } from "react-bootstrap";

const Auth0Button = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      id="btn-heigth"
      type="button"
      size="lg"
      block
    >
      Login or Register
    </Button>
  );
};

export default Auth0Button;
