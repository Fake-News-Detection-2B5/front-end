import React, { Component } from "react";
import { Accordion } from "react-bootstrap";

import CommonFooter from  "../common/CommonFooter.jsx";
import FAQ_Question from "../utility/FAQ_Question.jsx";

import '../../style/faq.scss';

class PageFAQ extends Component {
    state = { 
      questions: [{
          count: "1",
          answer: "Answer"
        }, {
          count: "2",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "3",
          answer: "A"
        }, {
          count: "4",
          answer: "Question"
        }, {
          count: "5",
          answer: "Goes"
        }, {
          count: "6",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "7",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "8",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "9",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "10",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "11",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "12",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "13",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "14",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "15",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "16",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "17",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "18",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "19",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }, {
          count: "20",
          answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi reprehenderit reiciendis nihil non amet possimus sed esse omnis sequi debitis alias voluptatibus id ipsa eaque aliquid, praesentium, hic ducimus natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum at quisquam dolorum eligendi in neque similique hic dicta ducimus! Fugit nam obcaecati, deleniti corrupti suscipit dolores! Voluptates eaque doloremque distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium nemo nesciunt iste ullam dolorem iure libero autem earum nisi dignissimos omnis quisquam, enim officia. Porro dolor accusamus libero nostrum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est culpa sed nihil dolorem placeat aspernatur labore minus tempore beatae at ad, iure doloremque! Aperiam, quis. Harum quae incidunt dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque mollitia commodi facilis officia eum maiores, sed debitis soluta numquam dicta culpa optio sunt tempora iste totam, cupiditate non accusantium?"
        }
      ]
    };
  
    render() {
      return (
        <React.Fragment>
            <div id="faq-header-container">
              <div id="faq-logo-container">
                <img
                  id="faq-logo" 
                  src={process.env.PUBLIC_URL + "/res/img/logo512.png"}
                  alt="brand logo"
                  width="128"
                  height="128"
                  />
              </div>
              <div id="faq-title-container">
                <h1> 
                  Frequently asked questions
                </h1>
              </div>
            </div>

            <main>
              <Accordion className="faq-accordion">
                {this.state.questions.map(question => {
                  return <FAQ_Question {...question} /> 
                }) }
              </Accordion>
            </main>


            <CommonFooter showFAQ={false} fixed />
        </React.Fragment>
      );
    }
}

export default PageFAQ;