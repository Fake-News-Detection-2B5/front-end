import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Tabs, Tab, Form, Pagination } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import JustUserPicture from "../common/JustUserPicture.jsx";

import "../../style/settings.scss";
import ProviderPreference from "../utility/ProviderPreference.jsx";

import request from "../../util/request.js";
import session from "../../util/session.js";

const PAGINATION_VISIBLE_COUNT = 3;
const PAGINATION_PROVIDERS_PER_PAGE = 3;

class PageSettings extends Component {
  state = {
    provider: {
      count: 0,
      list: []
    },
    query: "",       // changes when pressing search
    searchQuery: "", // changes with key presses
    pagination: {
      index: 1,
      count: 0
    },
    sessionInterval: null
  };

  componentDidMount = () => {
    this.updateProviderCount();

    if(session.isReady()) {
      this.setState();
    } else {
      this.state.sessionInterval = setInterval(() => {
        if(session.isReady()) {
          clearInterval(this.state.sessionInterval);
          this.setState();
        }
      }, 10);
    }
  }

  updateProviders = () => {
    request.get(this.state.searchQuery.length > 0 ? request.routes.API_PROVIDER_SEARCH : request.routes.API_PROVIDER_GET_INTERVAL, {
      skip: PAGINATION_PROVIDERS_PER_PAGE * (this.state.pagination.index - 1),
      count: Math.min(PAGINATION_PROVIDERS_PER_PAGE, this.state.provider.count - PAGINATION_PROVIDERS_PER_PAGE * (this.state.pagination.index - 1)),
      query: this.state.query
    }).then((res) => {
      console.log(res.data);
        this.setState({
          provider: {
            ...this.state.provider,
            list: res.data
          }
        })
        this.updateProviderChecked();
      }).catch((err) => {
        console.error(err);
    });
  }

  updateProviderCount = () => {
    request.get(this.state.searchQuery.length > 0 ? request.routes.API_PROVIDER_SEARCH_COUNT : request.routes.API_PROVIDER_COUNT, {
      query: this.state.query
    }).then((res) => {
        let providerCount = res.data.count;

        this.setState({
          provider: {
            ...this.state.provider,
            count: providerCount
          },
          pagination: {
            ...this.state.pagination,
            count: (Math.ceil(providerCount / PAGINATION_PROVIDERS_PER_PAGE))
          }
        });

        this.updateProviders();
      }).catch((err) => {
        console.error(err);
    });
  }

  updateProviderChecked = () => {
    this.state.provider.list.map((provider, index) => {
      request.get(request.routes.API_PREFERENCES_GET, {
        uid: session.get().userId,
        prov_id: provider.id
      }).then((res) => {
          let checked = (res.data.toString().trim().toLowerCase() === "true");
          this.state.provider.list[index].checked = checked;
          this.setState();
          this.forceUpdate();
        }).catch((err) => {
          console.error(err);
      });
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
    this.setState({
      query: this.state.searchQuery
    }, () => {
      this.updateProviderCount();

      console.log(`Search: ${this.state.query}`);

      this.updateProviderCount();
    })
  }

  handleSaveSettings = () => {
    this.state.provider.list.map((provider, index) => {
      request.put2(request.routes.API_PREFERENCES_UPDATE, {
        uid: session.get().userId,
        prov_id: provider.id,
        status: provider.checked ? true : false
      }).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.error(err);
      });
    });
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
                        <JustUserPicture />
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
                      {session.get().bio}
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
                  {
                    this.state.provider.list.length > 0 ?
                      this.state.provider.list.map((provider, index) => {
                        return <ProviderPreference {...provider} onChange={() => {
                            this.state.provider.list[index].checked = !this.state.provider.list[index].checked;

                            this.setState();
                            this.forceUpdate();
                        }} checked={provider.checked ? true : false} />
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
