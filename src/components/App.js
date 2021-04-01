import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import PageLanding from "./pages/PageLanding";
import PageFeed from "./pages/PageFeed";
import PageProfile from "./pages/PageProfile";
import PageProfileProvider from "./pages/PageProfileProvider";
import PageSettings from "./pages/PageSettings";
import PageFAQ from "./pages/PageFAQ";

class App extends Component {
  state = { /*dummy: false*/ };
  constructor() {
    super();

    /*Session.getFromCookies();
    Session.onUpdate = this.handleSessionUpdate;*/
  }

  /*handleSessionUpdate = () => {
    this.setState({ dummy: !this.state.dummy });
  };*/

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageLanding} />

          <Route exact path="/feed" component={PageFeed} />

          <Route exact path="/profile" component={PageProfile} />

          <Route exact path="/profile_provider" component={PageProfileProvider} />

          <Route exact path="/settings" component={PageSettings} />

          <Route exact path="/faq" component={PageFAQ} />

          {/*
              Redirects
            */}
          {/*<Redirect from="/diary" to={"/diary/" + Session.restaurant_id} />
          <Redirect from="/*" to={"/security/login"} />*/}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
