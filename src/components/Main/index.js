import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "../Products";
import { pathsData } from "../../const";
import Profile from "../Profile";
import ProductCard from "../ProductCard";
import SimpleProduct from "../ProductCard/SimpleProduct";

const Main = () => {
  return (
    <Switch>
      <Route
        exact
        path="/store-react-app/"
        render={() => {
          return (
            <Products
              info={pathsData.products}
              render={(product) => <ProductCard {...product} />}
            />
          );
        }}
      />

      <Route
        exact
        path="/store-react-app/profile"
        render={() => {
          return (
            <Profile
              info={pathsData.history}
              render={(product) => <SimpleProduct {...product} />}
            />
          );
        }}
      />
    </Switch>
  );
};

export default Main;
