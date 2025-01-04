import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../Home";
import { fetchRandomRepo } from "../../utils/githubAPI";

jest.mock("../../utils/githubApi");

describe("Home Page", () => {
  it("fetches and displays a random repository", async () => {
    const mockRepo = {
      name: "react",
      description: "A JavaScript library for building user interfaces",
      language: "JavaScript",
      stargazers_count: 190000,
      html_url: "https://github.com/facebook/react",
    };
    fetchRandomRepo.mockResolvedValueOnce(mockRepo);

    render(<Home />);

    const button = screen.getByText(/get random repo/i);
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/react/i)).toBeInTheDocument();
      expect(
        screen.getByText("A JavaScript library for building user interfaces")
      ).toBeInTheDocument();
    });
  });

  it("handles fetch errors gracefully", async () => {
    fetchRandomRepo.mockRejectedValueOnce(new Error("API error"));

    render(<Home />);

    const button = screen.getByText(/get random repo/i);
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText(/failed to fetch a repository/i)
      ).toBeInTheDocument();
    });
  });
});
