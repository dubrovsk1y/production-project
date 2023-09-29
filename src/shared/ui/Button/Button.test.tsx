import { render, screen } from "@testing-library/react";
import { Button, ButtonVariant } from "./Button";

describe("Button", () => {
  test("render", () => {
    render(<Button variant={ButtonVariant.TEXT}>TEST</Button>);

    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("text", () => {
    render(<Button variant={ButtonVariant.TEXT}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("text");
  });
});
