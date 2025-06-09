import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("visa hälsning med namn", () => {
  render(<Greeting name="Rachel" />);
  const heading = screen.getByText(/Hej, Rachel/i);
  expect(heading).to.exist;
});
