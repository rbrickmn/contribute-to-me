import React, { useState } from "react";
import { fetchRandomRepo } from "../utils/githubAPI";
import RepoCard from "../components/RepoCard";

const Home = () => {
  const [repo, setRepo] = useState(null);

  const handleFetchRepo = async () => {
    try {
      const randomRepo = await fetchRandomRepo();
      setRepo(randomRepo);
    } catch (error) {
      alert("Failed to fetch a repository. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <button
        onClick={handleFetchRepo}
        className="px-6 py-2 mb-6 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Get Random Repo
      </button>
      {repo && <RepoCard repo={repo} />}
    </div>
  );
};

export default Home;
