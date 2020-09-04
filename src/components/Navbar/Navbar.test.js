import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import NavBar from "./index";
import { ProfileCard } from "./index";
import { AppContext } from "../../contexts/UserContext";

describe("Navbar", () => {
  test("Renders Nabvar component", () => {
    const setUser = jest.fn();
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <AppContext.Provider
          value={{ user: { name: "John", points: 1000 }, setUser: { setUser } }}
        >
          <NavBar />
        </AppContext.Provider>
      </Router>
    );
    expect(getByText("Profile")).toBeInTheDocument();
    expect(getByText("Products")).toBeInTheDocument();
  });

  test("Changes path when link clicked", () => {
    const setUser = jest.fn();
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <AppContext.Provider
          value={{ user: { name: "John", points: 1000 }, setUser: { setUser } }}
        >
          <NavBar />
        </AppContext.Provider>
      </Router>
    );

    expect(history.location.pathname).toBe("/");
    userEvent.click(getByText(/Profile/i));
    expect(history.location.pathname).toBe("/store-react-app/profile");
    userEvent.click(getByText(/Products/i));
    expect(history.location.pathname).toBe("/store-react-app/");
  });
  //TODO
  test("Renders a Modal when profile clicked", () => {
    const setUser = jest.fn();
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <AppContext.Provider
          value={{ user: { name: "John", points: 1000 }, setUser: { setUser } }}
        >
          <NavBar />
        </AppContext.Provider>
      </Router>
    );
    //screen.debug();
    //userEvent.click(getByText('John'));
    //expect(getByText("x")).toBeInTheDocument();
  });
});

describe("ProfileCard", () => {
  const props = {
    setShowModal: jest.fn(),
    showModal: true,
  };

  test("Renders ProfileCard component", () => {
    const setUser = jest.fn();
    render(
      <AppContext.Provider
        value={{ user: { name: "John", points: 1000 }, setUser: { setUser } }}
      >
        <ProfileCard {...props} />
      </AppContext.Provider>
    );

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();

    userEvent.click(screen.getByText("1000"));
    expect(props.setShowModal).toHaveBeenCalledTimes(1);
  });
});
