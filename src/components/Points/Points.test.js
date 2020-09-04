import React from "react";
import ReactDOM from "react-dom";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppContext } from "../../contexts/UserContext";
import Points from "./index";
import { add_points_options, pathsData } from "../../const";
import userEvent from "@testing-library/user-event";

// import API mocking utilities from Mock Service Worker
import { rest } from "msw";
import { setupServer } from "msw/node";

describe("Points", () => {
  let container;

  // declare which API requests to mock
  const server = setupServer(
    // capture "GET /greeting" requests
    rest.get(
      `https://coding-challenge-api.aerolab.co${pathsData.points.path}`,
      (req, res, ctx) => {
        // respond using a mocked JSON body
        return res(
          ctx.json({
            message: "Points Updated",
            "new Points": 2000,
          })
        );
      }
    )
  );

  // establish API mocking before all tests
  beforeAll(() => server.listen());

  afterAll(() => server.close());
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    server.resetHandlers();
  });

  test("renders Points component", async () => {
    const setUser = jest.fn();
    act(() => {
      ReactDOM.render(
        <AppContext.Provider
          value={{ user: { name: "name" }, setUser: { setUser } }}
        >
          <Points />
        </AppContext.Provider>,
        container
      );
    });
    //screen.debug();
    expect(screen.getByText("Add points")).toBeInTheDocument();
    expect(screen.getByText("Go!")).toBeInTheDocument();
    expect(
      screen.getByText("Add points to your account now!")
    ).toBeInTheDocument();
    add_points_options.map((element) =>
      expect(screen.getByText(element.toString())).toBeInTheDocument()
    );
  });

  test("change classname when click", async () => {
    const setUser = jest.fn();
    render(
      <AppContext.Provider
        value={{ user: { name: "diana" }, setUser: setUser }}
      >
        <Points />
      </AppContext.Provider>
    );

    //screen.debug();

    expect(
      screen.getByText(add_points_options[0].toString()).parentElement
    ).toHaveClass("btn-active number");

    userEvent.click(screen.getByText(add_points_options[1].toString()));
    expect(
      screen.getByText(add_points_options[0].toString()).parentElement
    ).toHaveClass("btn number");
    expect(
      screen.getByText(add_points_options[1].toString()).parentElement
    ).toHaveClass("btn-active number");

    userEvent.click(screen.getByText(add_points_options[2].toString()));
    expect(
      screen.getByText(add_points_options[1].toString()).parentElement
    ).toHaveClass("btn number");
    expect(
      screen.getByText(add_points_options[2].toString()).parentElement
    ).toHaveClass("btn-active number");
  });
  //TODO
  test("make API call", async () => {
    const setU = jest.fn(() =>
      Promise.resolve({
        message: "Points Updated",
        "new Points": 2000,
      })
    );
    render(
      <AppContext.Provider value={{ user: { name: "diana" }, setUser: setU }}>
        <Points />
      </AppContext.Provider>
    );
    //screen.debug();
    /* let fetchFunc = require("../../const").fetchData;
    fetchFunc = jest.fn(() =>
      Promise.resolve({
        message: "Points Updated",
        "new Points": 2000,
      })
    ); */
    userEvent.click(screen.getByText("1000"));
    expect(screen.getByText("1000").parentElement).toHaveClass(
      "btn-active number"
    );
    //screen.debug();
    userEvent.click(screen.getByText("Go!"));
  });
});
