import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import CommonFooter from  "../common/CommonFooter.jsx";

import '../../style/faq.scss';

class PageFAQ extends Component {
    state = { };
  
    render() {
      return (
        <React.Fragment>
            <p>FAQ</p>
            <CommonFooter showFAQ={false} />
        </React.Fragment>
      );
    }
}

export default PageFAQ;