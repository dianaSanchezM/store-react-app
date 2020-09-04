import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

import SortBar from "./index";

describe("SortBar", () => {
  test("renders SortBar component", () => {
    render(<SortBar />);

    //screen.debug();
    expect(screen.getByText("Sort by:")).toBeInTheDocument();
    expect(screen.getByText("Lowest price")).toBeInTheDocument();
    expect(screen.getByText("Higest price")).toBeInTheDocument();
  });

  test("calls functions when click", async ()=>{
    const setSortBy = jest.fn();
    const jump = jest.fn();
 
    render(
      <SortBar jump={jump} setSortBy={setSortBy} />
    );
    userEvent.click(screen.getByText('Lowest price'))
    expect(setSortBy).toHaveBeenCalledTimes(1);
    expect(setSortBy).toHaveBeenCalledTimes(1);   
  })

});
