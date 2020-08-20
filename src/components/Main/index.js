import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "../Products";
import { pathsData} from '../../const';

const Main = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Products {...pathsData.LOAD_PRODUCTS} />;
        }}
      />

      {/* <Route path="/profile" component={Profile} />  */}
    </Switch>
  );
};

export default Main;
