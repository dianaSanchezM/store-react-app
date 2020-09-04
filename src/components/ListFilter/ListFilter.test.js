import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";

import ListFilter from "./index";

describe("ListFilter", () => {
  const props = {
    handleFilterChange: jest.fn(),
    jump: jest.fn(),
    id: "Any price",
    options: ["0 - 15", "16 - 30", "31 - 45"],
  };

  test("Renders list filter component", () => {
    render(<ListFilter {...props} />);

    expect(screen.getByText(props.id)).toBeInTheDocument();
    props.options.map((element) =>
      expect(screen.getByText(element)).toBeInTheDocument()
    );
  });

  test("Calls functions when select change", () => {
    render(<ListFilter {...props} />);

    fireEvent.change(screen.getByTestId("selectOption"), {
      target: { value: props.options[2] },
    });

    expect(props.handleFilterChange).toHaveBeenCalledTimes(1);
    expect(props.jump).toHaveBeenCalledTimes(1);
  });
});
