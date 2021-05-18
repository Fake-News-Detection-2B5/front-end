import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import PageLanding from "./pages/PageLanding";
import PageFeed from "./pages/PageFeed";
import PageProfile from "./pages/PageProfile";
import PageProfileProvider from "./pages/PageProfileProvider";
import PageSettings from "./pages/PageSettings";
import PageFAQ from "./pages/PageFAQ";
import PageSetup from "./pages/PageSetup";

import Auth from "./utility/Auth";

import session from "../util/session.js";

class App extends Component {
  state = { /*dummy: false*/ };
  constructor() {
    super();
    //await session.load();
    /*Session.getFromCookies();
    Session.onUpdate = this.handleSessionUpdate;*/
    session.onUpdate = () => {
      try {
        this.forceUpdate();
      } catch(ex) {
        
      }
    }
  }

  async componentDidMount() {
    await session.load();
    this.forceUpdate();
  }

  /*handleSessionUpdate = () => {
    this.setState({ dummy: !this.state.dummy });
  };*/

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageLanding} />

          <Auth>
            <React.Fragment>
              <Switch>
                <Route exact path="/feed" component={PageFeed} />

                <Route exact path="/profile" component={PageProfile} />

                <Route exact path="/settings" component={PageSettings} />

                <Route exact path="/faq" component={PageFAQ} />

                <Route exact path="/setup" component={PageSetup} />

                <Route exact path="/:providerId" component={PageProfileProvider} />
              </Switch>
            </React.Fragment>
          </Auth>

          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
