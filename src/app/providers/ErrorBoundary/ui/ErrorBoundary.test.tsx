import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  it("renders \"Something went wrong.\" when an error is thrown", () => {
    const spy = jest.spyOn(console, "error");
    spy.mockImplementation(() => {});

    const Throw = () => {
      throw new Error("bad");
    };

    render(
        <ErrorBoundary>
            <Throw />
        </ErrorBoundary>,
    );

    expect(screen.getByText("Something went wrong")).toBeDefined();

    spy.mockRestore();
  });
});
