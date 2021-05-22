import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import CommonFooter from "../common/CommonFooter.jsx";
import FAQ_Question from "../utility/FAQ_Question.jsx";

import "../../style/style.scss";

class PageFAQ extends Component {
  state = {
    questions: [
      {
        count: "1",
        question: "What is Fake News Detection?",
        answer:
          "Fake News Detection is a site which provides the user with news from various providers. For each news, it displays a probabiliy of it being fake.",
      },
      {
        count: "2",
        question: "Do I need something special to use it?",
        answer:
          "You only need an account on our site and you will be ready to use it after setting up your account.",
      },
      {
        count: "3",
        question: "Why do I need an account?",
        answer:
          "An account is needed so you can receive news from only from the providers that you want.",
      },
      {
        count: "4",
        question: "How can I change the providers that I am following?",
        answer: (
          <React.Fragment>
            {" "}
            To update your list of followed providers you need to go to the top
            right and press on profile avatar. <br /> From here you go Settings
            &gt; Preferences Settings. <br /> And from here you only need to
            select the providers you want to follow or unfollow. <br /> In the
            end, you will have to press the Save settings button to commit your
            changes.{" "}
          </React.Fragment>
        ),
      },
      {
        count: "5",
        question: "Can I access the profile of a news provider?",
        answer: (
          <React.Fragment>
            {" "}
            Yes, you can access it and in two ways. <br /> The first way is to
            click on the provider's avatar from a post. <br /> The other way is
            to go to Settings &gt; Preferences Settings and search for the
            specific provider and click on its avatar.{" "}
          </React.Fragment>
        ),
      },
      {
        count: "7",
        question: "How is a news provider's profile different from mine?",
        answer:
          "A news provider's profile contains a score of credibility and a list containing a few of their most recent news.",
      },
      {
        count: "8",
        question: "How do you determine how fake a piece of news is?",
        answer:
          "We use a multitude of artificial intelligence algorithms to determine a percentage of how fake a piece of news is.",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div id="faq-header-container">
          <div id="faq-logo-container">
            <LinkContainer to="/">
              <img
                id="faq-logo"
                className="rounded-img"
                src={process.env.PUBLIC_URL + "/res/img/logo512.png"}
                alt="brand logo"
                width="128"
                height="128"
              />
            </LinkContainer>
          </div>
          <div id="faq-title-container">
            <h1>Frequently asked questions</h1>
          </div>
        </div>

        <main id="faq_main">
          <Accordion className="faq-accordion">
            {this.state.questions.map((question) => {
              return <FAQ_Question {...question} />;
            })}
          </Accordion>
        </main>

        <CommonFooter showFAQ={false} />
      </React.Fragment>
    );
  }
}

export default PageFAQ;
