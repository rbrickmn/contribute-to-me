import React from "react";

const RepoCard = ({ repo }) => {
  if (!repo) return null;

  // Format the last updated date
  const lastUpdated = new Date(repo.updated_at).toLocaleDateString();

  return (
    <div className="max-w-md p-4 rounded-lg shadow-lg bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-100">
      <h2 className="text-xl font-bold">{repo.name}</h2>
      <p className="mt-1 mb-1">{repo.description || "No description available."}</p>

      <div className="mt-2 select-none">
        <span className="inline-block px-3 py-1 text-sm bg-gray-200 text-gray-800 dark:bg-gray-500 dark:text-gray-100 rounded">
          {repo.language || "General"}
        </span>
        <span className="ml-2 text-sm">⭐ {repo.stargazers_count}</span>
      </div>

      <div className="mt-4">
        <p>🐛 Open Issues: {repo.open_issues_count}</p>
        <p>🍴 Forks: {repo.forks_count}</p>
        <p>🕒 Last Updated: {lastUpdated}</p>
      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default RepoCard;
