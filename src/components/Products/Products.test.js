import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Products from "./index";
import { AppContext } from "../../contexts/UserContext";
import SimpleProduct from "../ProductCard/SimpleProduct";

describe("Products", () => {

  jest.mock("../../const", () => {
    return {
      fetchData: jest.fn(
        () =>
          new Promise((resolve) => {
            resolve({
              json: new Promise((resolve) => {
                console.log("ola k ase");
                resolve([
                  {
                    productId: "5a0b3600734d1d08bf7084e5",
                    name: "Canon EOS 5D",
                    cost: 2200,
                    category: "Cameras",
                    _id: "5e59e22c742352001ed90974",
                    createDate: "2020-08-25T22:01:54.389Z",
                    img: {
                      url:
                        "https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x1.png",
                      hdUrl:
                        "https://coding-challenge-api.aerolab.co/images/CanonEOS5D-x2.png",
                    },
                  }
                ]);
              }),
            });
          })
      ),
      filters: [
        {
          id: "Any category",
          options: [],
        },
        {
          id: "Any price",
          options: [
            "0 - 500",
            "501 - 1000",
            "1001 - 1500",
            "1501 - 2000",
            "2001 - 2500",
          ],
        },
      ],
      itemsPerPage: 16,
      sortFactors: ["Lowest price", "Higest price"],
      add_points_options: [1000, 5000, 7500],
      pathsData: {
        load_user: {
          id: "profile",
          path: "/user/me",
          method: "GET",
        },
        products: {
          id: "products",
          path: "/products",
          method: "GET",
        },
        history: {
          id: "history",
          path: "/user/history",
          method: "GET",
        },
        redeem: {
          id: "redeem",
          path: "/redeem",
          method: "POST",
        },
        points: {
          id: "points",
          path: "/user/points",
          method: "POST",
        },
      },
    };
  });
  const props = {
    info: {
      id: "history",
    },
    render: (product) => <SimpleProduct {...product} />,
  };
  test("Renders Products for history path", () => {
    //fetch.mockResponseOnce(JSON.stringify(Products));
    const setUser = jest.fn();
    render(
      <AppContext.Provider
        value={{ user: { name: "diana", points: 4000 }, setUser: setUser }}
      >
        <Products {...props} />
      </AppContext.Provider>
    );

    //TODO test modal
    //fetch('https://coding-challenge-api.aerolab.co/products');
    //screen.debug();
    //expect(screen.getByText("x")).toBeInTheDocument();
  });
});
