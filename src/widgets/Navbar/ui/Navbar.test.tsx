import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

describe("navbar", () => {
  test("withs one parameters", () => {
    render(
        <Router>
            <Navbar />
        </Router>,
    );
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  test("Navbar should render with the logo and links", () => {
    render(
        <Router>
            <Navbar />
        </Router>,
    );

    expect(screen.getByText("ovies")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
    expect(screen.getByText("History")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
});
