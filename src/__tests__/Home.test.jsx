import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";

test("renders home page", () => {
  const testRouter = createMemoryRouter([
    {
      path: "/",
      element: <Home />
    }
  ], {
    initialEntries: ["/"]
  });

  render(<RouterProvider router={testRouter} />);
  expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
});