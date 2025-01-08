import axios from "axios";

const BASE_URL = "https://api.github.com/search/repositories";

export const fetchRandomRepo = async (language = "") => {
  const query = "language:English stars:>1000";
  if (language) {
    query += ` language:${language}`;
  }

  const url = `${BASE_URL}?q=${query}&sort=stars&order=desc`;

  try {
    const response = await axios.get(url);
    const repos = response.data.items;
    if (repos.length > 0) {
      const randomIndex = Math.floor(Math.random() * repos.length);
      return repos[randomIndex];
    } else {
      throw new Error("No repositories found.");
    }
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};
