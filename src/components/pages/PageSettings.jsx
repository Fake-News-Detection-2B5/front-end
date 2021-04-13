import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Tabs, Tab, Form } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";

import "../../style/settings.scss";
import ProviderPreference from "../utility/ProviderPreference.jsx";

class PageSettings extends Component {
  state = {
    providers: [{
      name: "Digi24",
      credibility: "99",
      avatar: "http://www.digi24.ro/static/theme-repo/bin/images/digi24-logo.png"
    }, {
      name: "Digi24",
      credibility: "99",
      avatar: "http://www.digi24.ro/static/theme-repo/bin/images/digi24-logo.png"
    }]
  };

  render() {
    return (
      <React.Fragment>
        <CommonNavbar authenticated />
        <div id="settings-container">
          <Tabs defaultActiveKey="account" className="justify-content-center">
            <Tab eventKey="account" title="Account Settings">
              <div className="tab-custom-container">
                <div id="account-settings-container">
                  <div id="account-container">
                    <div
                      id="photo-container"
                      className="justify-content-center"
                    >
                      <div id="photo-with-button">
                        <img
                          id="photo-border"
                          src={
                            process.env.PUBLIC_URL + "/res/img/dummy_user.png"
                          }
                          width="100%"
                          height="100%"
                        />
                        <Button id="settings-button"> Edit </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    id="password-container"
                    className="justify-content-center"
                  >
                    <Form.Group controlId="formchangePassword" id="formmargin">
                      <Form.Control
                        type="password"
                        placeholder="New Password"
                      />
                    </Form.Group>
                    <Button className="settings-button">Change password</Button>
                  </div>

                  <div id="bio-container" className="justify-content-center">
                    <Button className="settings-button" id="bio-button">
                      Change Bio
                    </Button>
                    <div id="bio-text-container">
                      lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Ea vitae, eius soluta ut
                      ipsa in, cum voluptate reprehenderit tenetur explicabo
                      consequuntur quas beatae voluptas eligendi quisquam? Eius
                      qui enim ullam!
                    </div>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="preferences" title="Preferences Settings">
              <div className="tab-custom-container">
                <div id="preferences-settings-container">
                  {this.state.providers.map(provider => {
                    return <ProviderPreference {...provider} />
                  })}
                  <Button id="settings-save-btn"> Save settings</Button>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
        <CommonFooter fixed />
      </React.Fragment>
    );
  }
}

export default PageSettings;
