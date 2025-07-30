import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Movie from "../pages/Movie";

test("renders movie page", () => {
  const testRouter = createMemoryRouter([
    {
      path: "/movie/:id",
      element: <Movie />
    }
  ], {
    initialEntries: ["/movie/1"]
  });

  render(<RouterProvider router={testRouter} />);
  expect(screen.getByText(/Movie 1/i)).toBeInTheDocument();
});