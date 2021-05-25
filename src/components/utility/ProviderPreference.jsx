import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class ProviderPreference extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="preference-provider">
          <LinkContainer to={"/" + this.props.id}>
            <img
              className="photo-border"
              src={this.props.avatar}
              width="128"
              height="128"
            />
          </LinkContainer>
          <div className="preference-provider-flexer">
            <LinkContainer to={"/" + this.props.id}>
              <span className="preference-provider-info-name"> {this.props.name} </span>
            </LinkContainer>
            <Form className="ml-auto subscribe-form">
              <div key={`provider-checkbox` + this.props.name} className="mb-3">
                <Form.Check
                  variant="primary"
                  type="checkbox"
                  id={`provider-checkbox` + this.props.name}
                  label={`Subscribed`}
                  onChange={() => { 
                    this.props.onChange(); 
                    this.forceUpdate();
                  }}
                  checked={this.props.checked}
                />
              </div>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProviderPreference;
