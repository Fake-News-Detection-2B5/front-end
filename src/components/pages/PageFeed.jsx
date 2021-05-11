import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import CommonPost from "../common/CommonPost.jsx";
import request from "../../util/request.js";

import '../../style/style.scss';

const POST_INITIAL_COUNT = 10;
const POST_LOAD_COUNT = 5;

class PageFeed extends Component {
  state = {
    posts: [],
    postIndex: 0,
  };

  componentDidMount = () => {
    this.loadPosts(POST_INITIAL_COUNT);
    window.addEventListener("scroll", this.listenToScroll, true);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      this.loadPosts(POST_LOAD_COUNT);
    }
  };

  loadPosts = (count) => {
    request
      .get(request.routes.API_POST_GET_INTERVAL, {
        skip: this.state.postIndex,
        count: count,
      })
      .then((res) => {
        this.setState({
          posts: this.state.posts.concat(
            res.data.map((p) => {
              return {
                provider: {
                  avatar:
                    "http://www.digi24.ro/static/theme-repo/bin/images/digi24-logo.png",
                  name: "Digi24",
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
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <CommonNavbar authenticated />
        <main id="main-feed">
          {this.state.posts.map((post) => {
            return <CommonPost {...post} key={`post-${post.id}`} />;
          })}
        </main>
        <CommonFooter fixed />
      </React.Fragment>
    );
  }
}

export default PageFeed;
