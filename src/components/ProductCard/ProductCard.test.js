import React from "react";
import ReactDOM from "react-dom";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProductCard from "./index";
import SimpleProduct from "./SimpleProduct";
import { AppContext } from "../../contexts/UserContext";
import userEvent from "@testing-library/user-event";

const props = {
  _id: "g54fr3d23f4g5h67j",
  name: "TV Samsung 43",
  category: "TV",
  cost: 3400,
  img: {
    url: "www.tvimg.com",
  },
};

describe("ProductCard", () => {
  test("Renders ProductCard component", () => {
    const setUser = jest.fn();
    render(
      <AppContext.Provider
        value={{ user: { name: "diana", points: 4000 }, setUser: setUser }}
      >
        <ProductCard {...props} />
      </AppContext.Provider>
    );
    //TODO test modal
    expect(screen.getByText("TV")).toBeInTheDocument();
    expect(screen.getAllByText("3400")[0]).toBeInTheDocument();
    expect(screen.getByText("TV Samsung 43")).toBeInTheDocument();
    //test modal
    expect(screen.getByText("Redeem now")).toBeInTheDocument();

    userEvent.click(screen.getByText("Redeem now"));
    //expect(screen.getByText("x")).toBeInTheDocument();
  });

  test("Renders ProductCard component with not enough points", () => {
    const setUser = jest.fn();
    render(
      <AppContext.Provider
        value={{ user: { name: "diana", points: 2000 }, setUser: setUser }}
      >
        <ProductCard {...props} />
      </AppContext.Provider>
    );
    //TODO test modal
    expect(screen.getByText("TV")).toBeInTheDocument();
    expect(screen.getAllByText("3400")[0]).toBeInTheDocument();
    expect(screen.getByText("TV Samsung 43")).toBeInTheDocument();

    expect(screen.queryByText("Redeem now")).toBeNull();
    expect(screen.getByText(/You need/)).toBeInTheDocument();

  });
});

describe("SimpleCard", () => {
  test("Renders SimpleCard component", () => {
    render(<SimpleProduct {...props} />);

    expect(screen.getByText("TV")).toBeInTheDocument();
    expect(screen.getByText("3400")).toBeInTheDocument();
    expect(screen.getByText("TV Samsung 43")).toBeInTheDocument();
  });
});
