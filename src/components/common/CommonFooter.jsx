import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import '../../style/footer.scss';

class CommonFooter extends Component {
    state = { showFAQ: true };
  
    constructor(props) {
        super(props);
        this.state.showFAQ = props.showFAQ ?? true;
    }

    render() {
      return (
        <React.Fragment>
            <footer>
                <div className="footer-container">
                    <div>
                        Contact:
                        <a className="footer-contact-label" href="https://github.com/orgs/Fake-News-Detection-2B5/teams/front-end">
                            Our Github
                        </a>
                        &#124;
                        <a className="footer-contact-label" href="https://github.com/orgs/Fake-News-Detection-2B5/teams/front-end">
                            Our Github
                        </a>
                    </div>
                    {
                        this.state.showFAQ ? 
                        <LinkContainer to="/faq">
                            <Button variant="primary">
                                FAQ
                            </Button>
                        </LinkContainer>
                        :
                        <LinkContainer to="/">
                            <Button variant="primary">
                                Home
                            </Button>
                        </LinkContainer>
                    }
                </div>
            </footer>
        </React.Fragment>
      );
    }
}

export default CommonFooter;