import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Tabs, Tab, Form, Pagination } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";

import "../../style/settings.scss";
import ProviderPreference from "../utility/ProviderPreference.jsx";

const PAGINATION_VISIBLE_COUNT = 3;

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
    }],
    searchQuery: "",
    pagination: {
      index: 1,
      count: 10
    }
  };

  handlePaginationFactory = (i) => {
    return (event) => this.setState({
      pagination: {
        ...this.state.pagination,
        index: i
      }
    });
  }

  handleSearchKeyPress = (event) => {
    if(event.key === "Enter") {
      this.handleSearch();
      event.preventDefault();
    }
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
    console.log(this.state.searchQuery);
  }

  handleSearch = () => {
    // request.
    console.log(`Search request: '${this.state.searchQuery}'`);
  }

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
                  <Form id="preferences-settings-search">
                    <Form.Control type="text" placeholder="Search..." onChange={this.handleSearchChange} onKeyPress={this.handleSearchKeyPress} />
                    <Button id="preferences-settings-search-button" variant="primary" onClick={this.handleSearch}>
                      Search
                    </Button>
                  </Form>
                  {this.state.providers.map(provider => {
                    return <ProviderPreference {...provider} />
                  })}
                  <Pagination>
                    <Pagination.First onClick={this.handlePaginationFactory(1)} />
                    <Pagination.Prev onClick={this.handlePaginationFactory(this.state.pagination.index - 1)} />

                    {
                      this.state.pagination.index > PAGINATION_VISIBLE_COUNT ?
                      <React.Fragment>
                        <Pagination.Item onClick={this.handlePaginationFactory(1)}>{1}</Pagination.Item>
                        <Pagination.Ellipsis disabled/>
                      </React.Fragment> :
                        ""
                    }

                    {
                      this.state.pagination.index > 1 ?
                        <Pagination.Item onClick={this.handlePaginationFactory(this.state.pagination.index - 1)}>{this.state.pagination.index - 1}</Pagination.Item> :
                        ""
                    }

                    {
                      <Pagination.Item active onClick={this.handlePaginationFactory(this.state.pagination.index)}>{this.state.pagination.index}</Pagination.Item>
                    }

                    {
                      this.state.pagination.index < this.state.pagination.count ?
                        <Pagination.Item onClick={this.handlePaginationFactory(this.state.pagination.index + 1)}>{this.state.pagination.index + 1}</Pagination.Item> :
                        ""
                    }

                    {
                      this.state.pagination.index == 1 && this.state.pagination.count > 2 ?
                        <Pagination.Item onClick={this.handlePaginationFactory(this.state.pagination.index + 2)}>{this.state.pagination.index + 2}</Pagination.Item> :
                        ""
                    }

                    {
                      Math.max(this.state.pagination.index + 1, 3) < this.state.pagination.count ?
                        <React.Fragment>
                          <Pagination.Ellipsis disabled/>
                          <Pagination.Item onClick={this.handlePaginationFactory(this.state.pagination.count)}>{this.state.pagination.count}</Pagination.Item>
                        </React.Fragment> :
                        ""
                    }

                    <Pagination.Next onClick={this.handlePaginationFactory(this.state.pagination.index + 1)} />
                    <Pagination.Last onClick={this.handlePaginationFactory(this.state.pagination.count)} />
                  </Pagination>

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
