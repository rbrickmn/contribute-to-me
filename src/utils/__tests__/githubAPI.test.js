// src/utils/__tests__/githubApi.test.js
import axios from "axios";
import { fetchRandomRepo } from "../githubAPI";

jest.mock("axios");

describe("fetchRandomRepo", () => {
  it("fetches and returns a random repository", async () => {
    const mockData = {
      items: [
        {
          name: "react",
          stargazers_count: 190000,
          html_url: "https://github.com/facebook/react",
        },
      ],
    };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const repo = await fetchRandomRepo();
    expect(repo.name).toBe("react");
    expect(repo.stargazers_count).toBe(190000);
  });

  it("throws an error if no repositories are found", async () => {
    axios.get.mockResolvedValueOnce({ data: { items: [] } });

    await expect(fetchRandomRepo()).rejects.toThrow("No repositories found.");
  });
});
