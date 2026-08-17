import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("renders the message passed as a prop", () => {
    render(<ErrorMessage message="Something specific went wrong" />);
    expect(screen.getByText("Something specific went wrong")).toBeInTheDocument();
  });

  test("renders the default message when no prop is passed", () => {
    render(<ErrorMessage />);
    expect(
      screen.getByText("Something went wrong please try again later.")
    ).toBeInTheDocument();
  });
});