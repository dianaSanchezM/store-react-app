import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "../Products";
import { pathsData } from "../../const";
import Profile from '../Profile';

const Main = () => {
  return (
    <Switch>
      <Route
        exact
        path="/store-react-app/"
        render={() => {
          return <Products {...pathsData.products} />;
        }}
      />

      <Route
        exact
        path="/store-react-app/profile"
        render={() => {
          return <Profile info={pathsData.history} />;
        }}
      />
    </Switch>
  );
};

export default Main;
