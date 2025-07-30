import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Directors from "../pages/Directors";

test("renders directors page", () => {
  const testRouter = createMemoryRouter([
    {
      path: "/directors",
      element: <Directors />
    }
  ], {
    initialEntries: ["/directors"]
  });

  render(<RouterProvider router={testRouter} />);
  expect(screen.getByText(/Directors Page/i)).toBeInTheDocument();
});