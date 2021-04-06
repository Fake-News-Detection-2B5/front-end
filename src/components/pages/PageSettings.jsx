import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Tabs, Tab } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";

import '../../style/settings.scss';

class PageSettings extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <CommonNavbar />


        <Tabs defaultActiveKey="account" className="justify-content-center" >
          <Tab eventKey="account" title="Account Settings">
            <div id="account-settings-container">
              <div id="account-container">
                <div id="photo-container" className="justify-content-center">
                  <img src="public\res\img\dummy_user2.png" width="256" height="256" />
                  <Button className="settings-button"> Change photo </Button>
                </div>
              </div>

              <div id="password-container" className="justify-content-center">
                <input type="password" placeholder="New password"></input>
                <Button className="settings-button" >Change password</Button>
              </div>

              <div id="bio-container" className="justify-content-center">
                <Button className="settings-button" id="bio-button">Change Bio</Button>
                <div id="bio-text-container" >
                  lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea vitae, eius soluta ut ipsa in, cum voluptate reprehenderit tenetur explicabo consequuntur quas beatae voluptas eligendi quisquam? Eius qui enim ullam!
                </div>


              </div>
            </div>
          </Tab>
          <Tab eventKey="preferences" title="Preferences Settings">
            <div id="preferences-settings-container">

              <div className="preference-provider">
                <img src="public\res\img\dummy_user.png" width="128" height="128"/>
                <div className="preference-provider-info">
                  <p> rating fenomenal</p>
                  <p> provider 1</p>
                </div>
              </div>

              <div className="preference-provider">
              <img src="public\res\img\dummy_user.png" width="128" height="128"/>
                <div className="preference-provider-info">
                  <p> rating fenomenal</p>
                  <p> provider 2</p>
                </div>
              </div>

              <div className="preference-provider">
              <img src="public\res\img\dummy_user.png" width="128" height="128"/>
                <div className="preference-provider-info">
                  <p> rating fenomenal</p>
                  <p> provider 3</p>
                </div>
              </div>

              <div className="preference-provider">
              <img src="public\res\img\dummy_user.png" width="128" height="128"/>
                <div className="preference-provider-info">
                  <p> rating fenomenal</p>
                  <p> provider 4</p>
                </div>
              </div>

              <Button id="settings-save-btn"> Save settings</Button>
            </div>
          </Tab>
        </Tabs>



        <CommonFooter fixed />
      </React.Fragment >
    );
  }
}

export default PageSettings;