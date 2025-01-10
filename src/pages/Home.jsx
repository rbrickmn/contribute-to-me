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
      {/* Title Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-400">
          ContributeToMe
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Find your next GitHub repository to contribute to, randomly!
        </p>
      </header>

      {/* Button and Repo Card */}
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
