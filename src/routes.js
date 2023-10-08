// Routes.js

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import OrderPage from "./components/orderpage"; // The component for the order page

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Product} />
        <Route path="/order" component={OrderPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
