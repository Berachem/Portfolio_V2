import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Briefcase, Code, GitCommitIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface GithubStats {
  linesOfCode: string;
  commits: string;
}

const StatsSection: React.FC = () => {
  const [loadingLinesOfCode, setLoadingLinesOfCode] = useState(true);
  const [loadingCommits, setLoadingCommits] = useState(true);
  const [githubStats, setGithubStats] = useState<GithubStats>({
    linesOfCode: "Loading...",
    commits: "Loading...",
  });

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const username = "Berachem"; // Remplacez par votre nom d'utilisateur GitHub
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const repos = await response.json();

        let totalCommits = 0;
        let totalLinesOfCode = 0;

        for (const repo of repos) {
          // Récupération des commits
          const commitsResponse = await fetch(
            repo.commits_url.replace("{/sha}", "")
          );
          const commits = await commitsResponse.json();
          totalCommits += commits.length;

          // Simulation du nombre de lignes de code (GitHub REST API ne donne pas ce détail directement)
          totalLinesOfCode += Math.floor(Math.random() * 10000); // Dummy data
        }

        setGithubStats({
          linesOfCode: `${totalLinesOfCode.toLocaleString()}+`,
          commits: `${totalCommits.toLocaleString()}`,
        });
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des statistiques GitHub :",
          error
        );
        setGithubStats({
          linesOfCode: "...",
          commits: "...",
        });
      }

      setLoadingCommits(false);
      setLoadingLinesOfCode(false);
    };

    fetchGithubStats();
  }, []);

  return (
    <div className="space-y-4">
      <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 grid-cols-3 dark:text-white">
        {/* Projets */}
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">30+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Projets
          </dd>
          <Briefcase className="w-6 h-6" />
        </div>

        {/* Lignes de code */}
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
            {loadingLinesOfCode ? <Loader /> : githubStats.linesOfCode}
          </dt>
          <dd className="font-light text-gray-500 dark:text-gray-400 text-center">
            lignes de code
          </dd>
          <Code className="w-6 h-6" />
        </div>

        {/* Commits */}
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
            {loadingCommits ? <Loader /> : githubStats.commits}
          </dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Commits
          </dd>
          <GitCommitIcon className="w-6 h-6" />
        </div>
      </dl>

      {/* Voir mon github */}
      <div className="flex justify-center">
        <a
          href="www.github.com/Berachem"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-900 text-center "
        >
          Voir mon GitHub
          <FontAwesomeIcon
            icon={faGithub}
            className="w-4 h-4 inline-block ml-2 animate-bounce"
          />
        </a>
      </div>
    </div>
  );
};

export default StatsSection;
