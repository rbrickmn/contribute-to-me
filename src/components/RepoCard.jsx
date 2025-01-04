import React from "react";

const RepoCard = ({ repo }) => {
  if (!repo) return null;

  return (
    <div className="max-w-md p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold">{repo.name}</h2>
      <p className="text-gray-700">{repo.description}</p>
      <div className="mt-2">
        <span className="inline-block px-3 py-1 text-sm bg-gray-200 rounded">
          {repo.language || "Unknown"}
        </span>
        <span className="ml-2 text-sm">⭐ {repo.stargazers_count}</span>
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
