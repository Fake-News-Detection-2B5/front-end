import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import CommonPost from "../common/CommonPost.jsx";
import request from "../../util/request.js";
import RedirectIfNeeded from "../utility/RedirectIfNeeded";
import { Redirect } from "react-router";

import utils from "../../util/providerFunctions.js";

import session from "../../util/session";

import '../../style/style.scss';

const POST_INITIAL_COUNT = 10;
const POST_LOAD_COUNT = 5;

class PageFeed extends Component {
  state = {
    posts: [],
    postsLoading: true,
    postIndex: 0,
    loadingPosts: false,
    search: "",
    date: "",
    order: ""
  };

  componentDidMount = () => {
    this.loadPosts(POST_INITIAL_COUNT);

    window.addEventListener("scroll", this.listenToScroll, true);

    this.shouldRedirect();
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll, true);
  }

  listenToScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      this.loadPosts(POST_LOAD_COUNT);
    }
  };

  loadPosts = (count) => {
    if(this.state.loadingPosts) {
      return;
    }
    this.setState({loadingPosts: true});    
    this.state.loadingPosts = true;
    let body = {
      skip: this.state.postIndex,
      count: count
    };

    if(this.state.search && this.state.search.length > 0)
      body.query = this.state.search;
    if(this.state.date && this.state.date.length > 0)
      body.date = this.state.date;
    if(this.state.order && this.state.order.length > 0)
      body.order = this.state.order;

    request
      .get2(request.routes.API_POST_GET_INTERVAL, body, session.authHeaders())
      .then((res) => {
        this.setState({
          posts: this.state.posts.concat(
            res.data.map((p) => {
              return {
                provider: {
                  avatar: utils.getProviderImg(utils.getProviderFromURL(p.url)),
                  name: utils.getProviderName(utils.getProviderFromURL(p.url)),
                  id: utils.getProviderFromURL(p.url),
                },
                id: p.id,
                title: p.title,
                thumbnail: p.thumbnail,
                description: p.description,
                url: p.url,
                fake: p.score,
                date: p.postDate,
              };
            })
          ),
          postIndex: this.state.postIndex + count,
          postsLoading: false
        });
        this.setState({loadingPosts: false});
        this.state.loadingPosts = false; 
      })
      .catch((err) => {
        this.setState({
          postsLoading: false
        });
        
        session.onUpdate();
        console.error(err);
      });
  };

  shouldRedirect = () => {
    request.get2(request.routes.API_PREFERENCES_GET_SUBSCRIBED_PROVIDERS, {
      uid: session.get().userId,
      skip: 0,
      count: 10
    }, session.authHeaders()).then((res) => {
        console.log(res.data);
        this.setState({redirectComponent: res.data.length == 0 ? <Redirect to="/setup" /> : ""});
      }).catch((err) => {
        session.onUpdate();
        console.error(err);
    });
  }

  handleFilter = () => {
    this.setState({
      posts: [],
      postIndex: 0,
      postsLoading: true,
      loadingPosts: true
    })
    this.loadPosts(POST_INITIAL_COUNT);
  }

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  handleDateChange = (value) => {
    this.setState({
      date: value
    });
  }

  handleOrderChange = (value) => {
    this.setState({
      order: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <RedirectIfNeeded></RedirectIfNeeded>
        {this.state.redirectComponent}
        <CommonNavbar authenticated withSearch onSearchChange={this.handleSearchChange} onDateChange={this.handleDateChange} onOrderChange={this.handleOrderChange} onFilter={this.handleFilter}/>
        <main id="main-feed">
        {
            this.state.postsLoading ? <p id="feed-loading-label">Loading...</p> :
              ((!this.state.posts || this.state.posts.length == 0) ? <p id="feed-loading-label">Whoops, there are no posts.</p> :
                this.state.posts.map((post) => {
                  return <CommonPost {...post} key={`post-${post.id}`} />;
                })
              )
          }
        </main>
        <CommonFooter fixed /> {/*{...(this.state.postsLoading ? {fixed: true} : {sticky: true})}*/}
      </React.Fragment>
    );
  }
}

export default PageFeed;
