import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Actors from "../pages/Actors";

test("renders actors page", () => {
  const testRouter = createMemoryRouter([
    {
      path: "/actors",
      element: <Actors />
    }
  ], {
    initialEntries: ["/actors"]
  });

  render(<RouterProvider router={testRouter} />);
  expect(screen.getByText(/Actors Page/i)).toBeInTheDocument();
});