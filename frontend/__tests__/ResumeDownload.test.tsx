
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("SCRUM-24 Resume Download", () => {
  test("shows a resume download link", () => {
    render(<Home />);

    const links = screen.getAllByText("Download Resume");
    const link = links[0].closest("a");

    expect(link).toHaveAttribute(
      "href",
      "/Lapan-Sieba-Resume.pdf"
    );
    expect(link).toHaveAttribute("download");
  });
});
