import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  test("Button should render with the provided text", () => {
    const text = "Click me";
    render(<Button className="" onClick={() => {}} text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("Button should call the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button className="" onClick={onClickMock} text="Click me" />);
    fireEvent.click(screen.getByText("Click me"));

    expect(onClickMock).toHaveBeenCalled();
  });

  test("Button should have the provided className", () => {
    const className = "custom-button";
    render(<Button className={className} onClick={() => {}} text="Click me" />);

    expect(screen.getByText("Click me")).toHaveClass(className);
  });
});
