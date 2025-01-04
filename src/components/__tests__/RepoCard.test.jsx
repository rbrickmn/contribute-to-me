import React from "react";
import { render, screen } from "@testing-library/react";
import RepoCard from "../RepoCard";

describe("RepoCard Component", () => {
  const mockRepo = {
    name: "react",
    description: "A JavaScript library for building user interfaces",
    language: "JavaScript",
    stargazers_count: 190000,
    html_url: "https://github.com/facebook/react",
  };

  it("renders repository details", () => {
    render(<RepoCard repo={mockRepo} />);

    expect(screen.getByText(/react/i)).toBeInTheDocument();
    expect(
      screen.getByText("A JavaScript library for building user interfaces")
    ).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("⭐ 190000")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view on github/i })
    ).toHaveAttribute("href", "https://github.com/facebook/react");
  });

  it("does not render anything if no repo is provided", () => {
    const { container } = render(<RepoCard repo={null} />);
    expect(container.firstChild).toBeNull();
  });
});
