import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("renders navigation links", () => {
  render(<NavBar />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Directors/i)).toBeInTheDocument();
  expect(screen.getByText(/Actors/i)).toBeInTheDocument();
});