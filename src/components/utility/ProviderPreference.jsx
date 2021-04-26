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
            src={this.props.avatar}
            width="128"
            height="128"
          />
          <div className="preference-provider-info">
            <p> {this.props.name} </p>
            <p> Credibility: {this.props.credibility}% </p>
            
          </div>
          <Form className="ml-auto subscribe-form">
            <div key={`provider-checkbox` + this.props.name} className="mb-3">
              <Form.Check
                type="checkbox"
                id={`provider-checkbox` + this.props.name}
                label={`Subscribed`}
                onChange={() => {this.props.onChange();}}
                checked={this.props.checked}
              />
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default ProviderPreference;
