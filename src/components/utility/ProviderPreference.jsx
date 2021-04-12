import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class ProviderPreference extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="preference-provider">
          <img
            className="photo-border"
            src={process.env.PUBLIC_URL + "/res/img/dummy_user2.png"}
            width="128"
            height="128"
          />
          <div className="preference-provider-info">
            <p> rating fenomenal</p>
            <p> provider 1</p>
          </div>
          <Form className="ml-auto subscribe-form">
            <div key={`default-checkbox`} className="mb-3">
              <Form.Check
                type="checkbox"
                id={`default-checkbox`}
                label={`Subscribed`}
              />
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default ProviderPreference;
