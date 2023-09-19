import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "app/providers/store/config/hooks";
import { logout } from "features/Auth/model";

import Navbar from "./Navbar";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const useDispatchMock = useTypedDispatch as jest.Mock;
const useSelectorhMock = useTypedSelector as jest.Mock;

describe("Navbar Component", () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn()); // Mock the dispatch function
    useSelectorhMock.mockReturnValue({ uid: "user123" }); // Mock the user data
  });

  it("renders Navbar when user is logged in", () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>,
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByText("Movies")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
    expect(screen.getByText("History")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("renders Navbar when user is not logged in", () => {
    useSelectorhMock.mockReturnValue({ uid: null }); // Mock user as not logged in
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>,
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByText("Movies")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  it("calls the logout function when Logout is clicked", async () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>,
    );

    fireEvent.click(screen.getByText("Logout"));

    expect(logout).toHaveBeenCalled();
  });
});
