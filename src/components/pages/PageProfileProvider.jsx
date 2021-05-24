import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router";


import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import CommonPost   from "../common/CommonPost.jsx";
import request from "../../util/request.js";
import RedirectIfNeeded from "../utility/RedirectIfNeeded";

import session from "../../util/session";

import '../../style/style.scss';

const POST_INITIAL_COUNT = 10;
const POST_LOAD_COUNT = 5;

class PageProfileProvider extends Component {
  state = {
    providerReady: false,
    provider: {},
    posts: [],
    providerValid: true,
    postIndex: 0
  };

  componentDidMount = () => {
    request.get2(request.routes.API_PROVIDER_BY_ID, {
      provider_id: this.props.match.params.providerId 
    }, session.authHeaders()).then((res) => {
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
    this.loadPosts(POST_INITIAL_COUNT);
    window.addEventListener("scroll", this.listenToScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll, true);
  }

  listenToScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      this.loadPosts(POST_LOAD_COUNT);
    }
  };

  loadPosts = (count) => {
    request
      .get2(request.routes.API_POST_GET_INTERVAL_BY_PROVIDER, {
        provider_id: this.props.match.params.providerId,
        skip: this.state.postIndex,
        count: count,
      }, session.authHeaders())
      .then((res) => {
        this.setState({
          posts: this.state.posts.concat(
            res.data.map((p) => {
              return {
                provider: {
                  avatar: this.state.provider.avatar,
                  name: this.state.provider.name,
                },
                id: p.id,
                title: p.title,
                thumbnail: p.thumbnail,
                description: p.description,
                url: p.sourceUrl,
                fake: p.score,
                date: p.postDate,
              };
            })
          ),
          postIndex: this.state.postIndex + count,
          postsLoading: false
        });
      })
      .catch((err) => {
        this.setState({
          postsLoading: false
        });
        
        session.onUpdate();
        console.error(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <RedirectIfNeeded></RedirectIfNeeded>
      {this.state.providerValid === true && this.state.providerValid === false ? <Redirect to="/feed" /> : 
      <React.Fragment>
        <CommonNavbar authenticated />
        {this.state.providerReady ? 
        <React.Fragment>
            <div id="profile-container">
          <div id="profile-header">
            <img className="photo-border" src={this.state.provider.avatar} alt="User avatar" />
            <div id="provider-profile-name-credibility">
              <h1> {this.state.provider.name}  </h1>
              {/* <h2> Credibility: {this.state.provider.credibility}% </h2> */}
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