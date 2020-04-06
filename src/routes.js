import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Products/Register";
import List from "./pages/Products/List";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register/:sku?" component={Register} />
    <Route exact path="/list" component={List} />
  </Switch>
);

export default Routes;
