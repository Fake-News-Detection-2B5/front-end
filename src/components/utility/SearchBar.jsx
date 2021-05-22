import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Tabs, Tab, Form, Pagination } from "react-bootstrap";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect } from "react-router";

import '../../style/style.scss';

import ProviderPreference from "../utility/ProviderPreference.jsx";
import FilterModal from "./FilterModal.jsx";
import RedirectIfNeeded from "../utility/RedirectIfNeeded";

import request from "../../util/request.js";
import session from "../../util/session.js";

const PAGINATION_VISIBLE_COUNT = 6;
const PAGINATION_PROVIDERS_PER_PAGE = 6;

class SearchBar extends Component {
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
        redirectComponent: null,
    };

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

    render() {
        return (
            <React.Fragment>
                <div id="navbar-parent">
                    <Form id="navbar-search">
                        <Form.Control type="text" placeholder="Search..." onChange={this.handleSearchChange} onKeyPress={this.handleSearchKeyPress} />
                        <FilterModal />
                        <Button id="preferences-setup-search-button" variant="primary" onClick={this.handleSearch}>
                            Search
                        </Button>
                    </Form>
                </div>
            </React.Fragment>
        );
    }

}

export default SearchBar;