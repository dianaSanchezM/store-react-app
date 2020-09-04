import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Pagination from "./index";

describe("Pagination", () => {
  const props = {
    currentPage: 1,
    jump: jest.fn(),
    prev: jest.fn(),
    next: jest.fn(),
    maxPage: 5,
  };
  test("Renders Pagination component", () => {
    render(<Pagination {...props} />);

    expect(screen.getByText(/of/)).toBeInTheDocument();
    expect(screen.getByText(/products/)).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("<<")).toBeInTheDocument();
    expect(screen.getByText("<")).toBeInTheDocument();
    expect(screen.getByText(">")).toBeInTheDocument();
    expect(screen.getByText(">>")).toBeInTheDocument();

  });

  test("Calls functions when button clicked", () => {
    render(<Pagination {...props} />);
    
    userEvent.click(screen.getByText("<"));
    expect(props.prev).toHaveBeenCalledTimes(1);

    userEvent.click(screen.getByText(">"));
    expect(props.next).toHaveBeenCalledTimes(1);

    userEvent.click(screen.getByText(">>"));
    expect(props.jump).toHaveBeenCalledTimes(1);
    expect(props.jump).toHaveBeenCalledWith(props.maxPage);

    userEvent.click(screen.getByText("<<"));
    expect(props.jump).toHaveBeenCalledTimes(2);
    expect(props.jump).toHaveBeenCalledWith(1);

  });
});
