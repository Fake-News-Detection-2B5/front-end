import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";

class FAQ_Question extends Component {
  state = {};

  render() {
    return (
      <Card>
        <Accordion.Toggle
          className="faq-question-header"
          as={Card.Header}
          eventKey={this.props.count}
        >
          <span>
            {this.props.count}. {this.props.question}
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.count}>
          <Card.Body className="faq-question-body">
            <span> {this.props.answer} </span>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default FAQ_Question;
