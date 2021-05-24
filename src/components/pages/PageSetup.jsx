import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Tabs, Tab, Form, Pagination } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import { LinkContainer } from "react-router-bootstrap";

import '../../style/style.scss';
import ProviderPreference from "../utility/ProviderPreference.jsx";

import RedirectIfNeeded from "../utility/RedirectIfNeeded";

import request from "../../util/request.js";
import session from "../../util/session.js";

const PAGINATION_VISIBLE_COUNT = 6;
const PAGINATION_PROVIDERS_PER_PAGE = 6;

class PageSetup extends Component {
  state = {
    provider: {
      count: 0,
      list: []
    },
    query: "",       // chanes when pressing search
    searchQuery: "", // changes with key presses
    pagination: {
      index: 1,
      count: 0
    },
    sessionInterval: null,
    redirectComponent: null
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
    request.get2(this.state.searchQuery.length > 0 ? request.routes.API_PROVIDER_SEARCH : request.routes.API_PROVIDER_GET_INTERVAL, {
      skip: PAGINATION_PROVIDERS_PER_PAGE * (this.state.pagination.index - 1),
      count: Math.min(PAGINATION_PROVIDERS_PER_PAGE, this.state.provider.count - PAGINATION_PROVIDERS_PER_PAGE * (this.state.pagination.index - 1)),
      query: this.state.query
    }, session.authHeaders()).then((res) => {
      console.log(res.data);
        this.setState({
          provider: {
            ...this.state.provider,
            list: res.data
          }
        })
        this.updateProviderChecked();
      }).catch((err) => {
        session.onUpdate();
        console.error(err);
    });
  }

  updateProviderCount = () => {
    request.get2(this.state.searchQuery.length > 0 ? request.routes.API_PROVIDER_SEARCH_COUNT : request.routes.API_PROVIDER_COUNT, {
      query: this.state.query
    }, session.authHeaders()).then((res) => {
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
        session.onUpdate();
        console.error(err);
    });
  }

  updateProviderChecked = () => {
    this.state.provider.list.map((provider, index) => {
      request.get2(request.routes.API_PREFERENCES_GET, {
        uid: session.get().userId,
        prov_id: provider.id
      }, session.authHeaders()).then((res) => {
          let checked = (res.data.toString().trim().toLowerCase() === "1");
          
          this.state.provider.list[index].checked = checked;
          this.setState();
          this.forceUpdate();
        }).catch((err) => {
          session.onUpdate();
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
      }, session.authHeaders()).then((res) => {
          console.log(res);
        }).catch((err) => {
          session.onUpdate();
          console.error(err);
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <RedirectIfNeeded></RedirectIfNeeded>
        {this.state.redirectComponent}
        <div className="tab-custom-container">
          <div className="setup-title">
            Looks like you're not subscribed to any news provider<br/>Select some, and you'll see news from them in your feed
          </div>
          <div id="preferences-setup-container">
            <Form id="preferences-setup-search">
              <Form.Control type="text" placeholder="Search..." onChange={this.handleSearchChange} onKeyPress={this.handleSearchKeyPress} />
              <Button id="preferences-setup-search-button" variant="primary" onClick={this.handleSearch}>
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
                <div id="setup-preferences-loading">Loading...</div>
            }
            <Pagination id="setup-preferences-pagination">
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
            <LinkContainer to="/feed">
              <Button id="setup-save-btn" onClick={this.handleSaveSettings}>
                Save setup
              </Button>
            </LinkContainer>
          </div>
        </div>
        <CommonFooter fixed />
        <br/><br/><br/>
      </React.Fragment>
    );
  }
}

export default PageSetup;
