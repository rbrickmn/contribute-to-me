import React from "react";

const RepoCard = ({ repo }) => {
  if (!repo) return null;

  return (
    <div className="max-w-md p-4 rounded-lg shadow-lg bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-100">
      <h2 className="text-xl font-bold">{repo.name}</h2>
      <p className="mt-1 mb-1">{repo.description}</p>
      <div className="mt-2 select-none">
        <span className="inline-block px-3 py-1 text-sm bg-white text-gray-800 dark:bg-gray-500 dark:text-gray-100 rounded">
          {repo.language || "Unknown"}
        </span>
        <span className="ml-2 text-sm">⭐ {repo.stargazers_count}</span>
      </div>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-2 text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default RepoCard;
