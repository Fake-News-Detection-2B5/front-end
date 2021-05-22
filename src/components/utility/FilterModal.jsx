import React, { Component } from "react";
import { Modal, Form, ListGroup, Button } from "react-bootstrap";

class FilterModal extends Component {
    state = {
        show: false,
        filter: {
            date: 0,
            ascendant: true
        }
    };

    handleModalClose = () => {
        this.setState({ show: false });
    }

    handleModalOpen = () => {
        this.setState({show: true});
    }

    handleFormRadioChange = (event) => {
        console.log(event.target);        
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
                                <Form>
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-date-1"
                                        label="Last Day"
                                        name="radio"
                                        checked={this.state.filter.date === 0}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-date-2"
                                        label="Last Week"
                                        name="radio"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-date-3"
                                        label="Last Month"
                                        name="radio"
                                    />
                                    <Form.Check
                                        type="radio"
                                        id="radio-option-date-4"
                                        label="Last Year"
                                        name="radio"
                                    />
                                </Form>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Order:
                                <Form>
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
                                    />
                                </Form>
                            </ListGroup.Item>
                        </ListGroup>
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