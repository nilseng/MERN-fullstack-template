import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import history from "./utils/history";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact render={() => "component placeholder"} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
