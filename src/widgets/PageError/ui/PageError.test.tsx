import { render, screen } from "@testing-library/react";

import PageError from "./PageError";

describe("PageError component", () => {
  test("withs one parameters", () => {
    render(<PageError />);
    expect(screen.getByTestId("page-error")).toBeInTheDocument();
  });

  it("renders with a refresh button", () => {
    render(<PageError />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Refresh page")).toBeInTheDocument();
  });
});
