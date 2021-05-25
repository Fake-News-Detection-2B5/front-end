import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import '../../style/style.scss';

import FilterModal from "./FilterModal.jsx";

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