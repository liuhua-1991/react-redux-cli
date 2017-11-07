import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "../containers/Main";
import asyncComponent from "../utils/AsyncComponent";

const AsyncHome = asyncComponent(() =>
  import(/* webpackChunkName: "home" */ "../containers/Home")
);
const AsyncFoo = asyncComponent(() =>
  import(/* webpackChunkName: "foo" */ "../containers/Foo")
);
export default (
  <Router>
    <Switch>
      <Route exact path="/home" component={AsyncHome} />
      <Route path="/foo" component={AsyncFoo} />
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);
