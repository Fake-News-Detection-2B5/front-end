import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router";


import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import CommonPost   from "../common/CommonPost.jsx";
import request from "../../util/request.js";

import '../../style/profile_provider.scss';

class PageProfileProvider extends Component {
  state = {
    providerReady: false,
    provider: {},
    posts: [],
    providerValid: true
  };

  componentDidMount = () => {
    request.get(request.routes.API_PROVIDER_BY_ID, {
      id: this.props.match.params.providerId 
    }).then((res) => {
        this.setState({
          provider: res.data,
          providerValid: res.data ? true : false,
          providerReady: true
        });

      }).catch((err) => {
        console.error(err);
        this.setState({
          providerValid: false
        });
    });
  }

  render() {
    return (
      <React.Fragment>
      {this.state.providerValid == false ? <Redirect to="/feed" /> : 
      <React.Fragment>
        <CommonNavbar authenticated />
        {this.state.providerReady ? 
        <React.Fragment>
            <div id="profile-container">
          <div id="profile-header">
            <img className="photo-border" src={this.state.provider.avatar} alt="User avatar" />
            <div id="provider-profile-name-credibility">
              <h1> {this.state.provider.name}  </h1>
              <h2> Credibility: {this.state.provider.credibility}% </h2>
            </div>
          </div>
          <div id="bio-container-provider" className="justify-content-center">
            <div id="bio-text-container" >
              No description
                </div>
          </div>
        </div>
        <div id="horizontal-line">

        </div>

        <div id="profile-posts">
          <main>
            {this.state.posts.map(post => {
              return <CommonPost {...post} />
            })}
          </main>
        </div>
        </React.Fragment> 
        :
        "" 
      }
        

        <CommonFooter fixed />
      </React.Fragment>
    }
    </React.Fragment>
      
    );
  }
}

export default PageProfileProvider;