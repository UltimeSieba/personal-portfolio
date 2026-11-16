import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("SCRUM-23 Profile Picture", () => {
  test("shows my profile picture on the homepage", () => {
    render(<Home />);

    const picture = screen.getByAltText("Lapan Sieba profile picture");
    expect(picture).toBeInTheDocument();
    expect(picture).toHaveAttribute("src", expect.stringContaining("DSC_0900.jpg"));
  });
});
