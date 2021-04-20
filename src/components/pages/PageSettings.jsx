import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Tabs, Tab, Form, Pagination } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";

import "../../style/settings.scss";
import ProviderPreference from "../utility/ProviderPreference.jsx";

import request from "../../util/request.js";

const PAGINATION_VISIBLE_COUNT = 3;
const PAGINATION_PROVIDERS_PER_PAGE = 3;

class PageSettings extends Component {
  state = {
    provider: {
      count: 0,
      list: []
    },
    searchQuery: "",
    pagination: {
      index: 1,
      count: 0
    }
  };

  componentDidMount = () => {
    request.get(request.routes.API_PROVIDER_COUNT)
      .then((res) => {
        let providerCount = parseInt(res.data);
        this.setState({
          provider: {
            ...this.state.provider,
            count: providerCount
          },
          pagination: {
            ...this.state.pagination,
            count: (providerCount / PAGINATION_PROVIDERS_PER_PAGE) + (providerCount % PAGINATION_PROVIDERS_PER_PAGE > 0 ? 1 : 0)
          }
        });

        this.updateProviders();
      }).catch((err) => {
        console.error(err);
    });
  }

  updateProviders = () => {
    request.get(request.routes.API_PROVIDER_GET_INTERVAL, {
      skip: PAGINATION_PROVIDERS_PER_PAGE * (this.state.pagination.index - 1),
      count: PAGINATION_PROVIDERS_PER_PAGE
    }).then((res) => {
        this.setState({
          provider: {
            ...this.state.provider,
            list: res.data
          }
        })
      }).catch((err) => {
        console.error(err);
    });
  }

  handlePaginationFactory = (i) => {
    return (event) => {
        if(i >= 1 && i <= this.state.pagination.count) {
          this.setState({
            pagination: {
              ...this.state.pagination,
              index: i
            }
          }, this.updateProviders)
        }
    };
  }

  handleSearchKeyPress = (event) => {
    if(event.key === "Enter") {
      this.handleSearch();
      event.preventDefault();
    }
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  handleSearch = () => {
    console.log(`Search: ${this.props.searchQuery}`);
  }

  handleSaveSettings = () => {
    
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
                  {this.state.provider.list.length > 0 ?
                    this.state.provider.list.map(provider => {
                      return <ProviderPreference {...provider} />
                    }) :
                    <div id="settings-preferences-loading">Loading...</div>
                  }
                  <Pagination id="settings-preferences-pagination">
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
                      (() => {
                        let list = [];

                        for(let i = this.state.pagination.index - 1; i >= 1 && i >= this.state.pagination.index - ((PAGINATION_VISIBLE_COUNT - 1) / 2); --i) {
                          list.push(<Pagination.Item onClick={this.handlePaginationFactory(i)}>{i}</Pagination.Item>);
                        }

                        return list;
                      })()
                    }

                    {
                      <Pagination.Item active onClick={this.handlePaginationFactory(this.state.pagination.index)}>{this.state.pagination.index}</Pagination.Item>
                    }

                    {
                      (() => {
                        let list = [];

                        for(let i = this.state.pagination.index + 1; i <= this.state.pagination.count && i <= this.state.pagination.index + ((PAGINATION_VISIBLE_COUNT - 1) / 2); ++i) {
                          list.push(<Pagination.Item onClick={this.handlePaginationFactory(i)}>{i}</Pagination.Item>);
                        }

                        return list;
                      })()
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

                  <Button id="settings-save-btn" onClick={this.handleSaveSettings}> Save settings</Button>
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
