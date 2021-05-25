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

class SearchBar extends Component {
    state = { };

    handleSearchChange = (event) => {
        console.log('onChange: ' + event.target.value);
    }

    handleSearchKeyPress = (event) => {
        console.log('onKeyPress: ' + event.target.value);
    }

    handleSearch = () => {
        console.log('Button for search pressed');
    }

    render() {
        return (
            <React.Fragment>
                <div id="navbar-parent">
                    <Form id="navbar-search">
                        <Form.Control type="text" placeholder="Search..." onChange={this.props.onSearchChange} />
                        <FilterModal onDateChange={this.props.onDateChange} onOrderChange={this.props.onOrderChange} onFilter={this.props.onFilter} />
                        <Button id="preferences-setup-search-button" variant="primary" onClick={this.props.onFilter}>
                            Search
                        </Button>
                    </Form>
                </div>
            </React.Fragment>
        );
    }

}

export default SearchBar;