import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from  "../common/CommonNavbar.jsx";
import CommonFooter from  "../common/CommonFooter.jsx";

import '../../style/profile.scss';

class PageProfile extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <CommonNavbar authenticated />
            <div id="profile-container">
              <div id="profile-header">
                <img className="photo-border" src={process.env.PUBLIC_URL + "/res/img/dummy_user.png"} alt="User avatar" />

                <div id="profile-username">
                  <h1> Username here </h1>
                </div>
              </div>
              <div id="bio-container-profile" className="justify-content-center">
                <div id="bio-text-container" >
                  lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea vitae, eius soluta ut ipsa in, cum voluptate reprehenderit tenetur explicabo consequuntur quas beatae voluptas eligendi quisquam? Eius qui enim ullam!
                </div>
              </div>
            </div>
            <CommonFooter fixed />
        </React.Fragment>
      );
    }
}

export default PageProfile;