import React, { Component } from "react";
import { Modal, Form, ListGroup, Button } from "react-bootstrap";

class FilterModal extends Component {
    state = {
        show: false,
        filter: {
            date: 1,
            ascendant: true
        }
    };

    handleModalClose = () => {
        this.setState({ show: false });
    }

    handleModalOpen = () => {
        this.setState({show: true});
    }

    handleFormDateRadioChange = (event) => {
        //console.log(event.target.id); 
        let pos = event.target.id.lastIndexOf("-");
        //console.log(event.target.id.substr(pos+1,1));
        let id = event.target.id.substr(pos+1,1);
        let ascendant = this.state.filter.ascendant;

        
        this.setState({filter: {date: parseInt(id), ascendant: ascendant}});
        console.log(this.state.filter);
    }

    handleFromOrderRadioChange = (event) => {
        let pos = event.target.id.lastIndexOf("-");
        let id = event.target.id.substr(pos+1,1);
        let value = id === "1";
        
        let date = this.state.filter.date;

        this.setState({filter: {date: date, ascendant: value}});
        console.log(this.state.filter);
    }

    handleApplyFilters = async () => {
        alert('NU AVEM FILTRE');
        return;
    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.show} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Filter posts by</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <ListGroup>
                            <ListGroup.Item>
                                Date:
                                <Form onChange={this.handleFormDateRadioChange}>
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-date-1"
                                        label="Last Day"
                                        name="radio"
                                        checked={this.state.filter.date === 1}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-date-2"
                                        label="Last Week"
                                        name="radio"
                                        checked={this.state.filter.date === 2}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-date-3"
                                        label="Last Month"
                                        name="radio"
                                        checked={this.state.filter.date === 3}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-date-4"
                                        label="Last Year"
                                        name="radio"
                                        checked={this.state.filter.date === 4}
                                    />
                                </Form>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Order:
                                <Form onChange={this.handleFromOrderRadioChange}>
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-order-1"
                                        label="Ascending"
                                        name="order"
                                        checked={this.state.filter.ascendant === true}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-order-2"
                                        label="Descending"
                                        name="order"
                                        checked={this.state.filter.ascendant === false}
                                    />
                                </Form>
                            </ListGroup.Item>
                        </ListGroup>

                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={this.handleModalClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="primary"
                                onClick={this.handleApplyFilters}
                            >
                                Apply filters
                            </Button>
                        </Modal.Footer>
                    </Modal.Body>
                </Modal>

                <Button
                    onClick={this.handleModalOpen}
                >
                    {""}
                    Filter{""}
                </Button>
            </React.Fragment>
        );
    }
}

export default FilterModal;