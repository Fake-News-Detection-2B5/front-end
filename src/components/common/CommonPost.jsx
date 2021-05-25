import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import '../../style/style.scss';

class CommonPost extends Component {
    state = {};

    handleMonth = (month) => {
        switch(month.toLowerCase()) {
            case "january":
                return "01";
            case "february":
                return "02";
            case "march":
                return "03";
            case "april":
                return "04";
            case "may":
                return "05";
            case "june":
                return "06";
            case "july":
                return "07";
            case "august":
                return "08";
            case "september":
                return "09";
            case "october":
                return "10";
            case "november":
                return "11";
            case "december":
                return "12";
        }
    }

    handleDate = (date) => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        let newDate = date.split(' ')[0].replace(/-/g, ' ');
        let returnDate;
        let newDateList = newDate.split(' ');

        if(parseInt(newDateList[2]) === yyyy && this.handleMonth(newDateList[1]) === mm) {
            if(dd === newDateList[0]){
                returnDate = "Today";
            } 
            else if(Math.abs(parseInt(dd) - parseInt(newDateList[0])) === 1) {
                returnDate = "Yesterday";
            }
            else
                returnDate = Math.abs(parseInt(dd) - parseInt(newDateList[0])) + " days ago";
        }
        else
            returnDate = newDateList.join(' ');
        return returnDate;
    }

    render() {
        return (
            <React.Fragment>
                <div className="post-container">
                    <a className="post-readmore" href={this.props.url} target="_blank">
                        [read more]
                </a>
                    <div className="post-header">
                        <LinkContainer to={"/" + this.props.provider.id}>
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
                            <span className="post-date"> {this.handleDate(this.props.date)} </span>
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