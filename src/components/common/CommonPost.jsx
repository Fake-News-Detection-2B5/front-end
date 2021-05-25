import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import '../../style/style.scss';

class CommonPost extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <div className="post-container">
                <a className="post-readmore" href={this.props.url} target="_blank">
                    [read more]
                </a>
                <div className="post-header">
                    <LinkContainer to= {"/" + this.props.provider.id}>
                        <div className="pointer">
                            <img className="post-provider-avatar" src={this.props.provider.avatar} alt="Avatar" />
                            <span className="post-provider-name">
                                {this.props.provider.name}
                            </span>
                        </div>
                    </LinkContainer>
                    <div>
                        {/* <LinkContainer to="#">
                            <a className="post-feedback-text text-secondary">
                                (feedback)
                            </a>
                        </LinkContainer> */}
                        <span className={`post-credibility-${this.props.fake === "true" ? 'good' : 'bad'}`}>
                            {this.props.fake}
                        </span>
                    </div>
                </div>
                <div className="post-body">
                    <a href={this.props.url} target="_blank">
                        <img className="post-thumbnail" src={this.props.title !== "Unknown" ? this.props.title : (process.env.PUBLIC_URL + "/res/img/default_thumbnail.png")} alt="Thumbnail" />
                    </a>
                    <a className="post-title" href={this.props.url} target="_blank">
                        {this.props.thumbnail}
                    </a>
                    <div className="post-description text-secondary">
                    {this.props.description.toString().substring(0, 300).replace(/\\/g, "") + "..."}
                    </div>
                </div>
            </div>
        </React.Fragment>
      );
    }
}

export default CommonPost;