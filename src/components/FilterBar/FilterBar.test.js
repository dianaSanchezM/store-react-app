import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { filters } from "../../const";
import FilterBar from "./index";

describe("FilterBar", () => {
  const props = {
    products: [
      {
        category: "Pets",
      },
      {
        category: "Home",
      },
    ],
    setCategoryFilter: jest.fn(),
    setPriceFilter: jest.fn(),
    jump: jest.fn(),
  };

  test("Renders FilterBar component", () => {
    render(<FilterBar {...props} />);

    expect(screen.getByText("Filter by:")).toBeInTheDocument();
    expect(screen.getByText("Pets")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText(filters.price.options[0])).toBeInTheDocument();
  });
});
