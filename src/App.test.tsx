import { render, screen } from "@testing-library/react";
import App from "./App";

it("Should render the main heading of the website", () => {
  render(<App></App>);
  const heading = screen.queryByText("PAOLO");

  expect(heading).toBeVisible();
});
