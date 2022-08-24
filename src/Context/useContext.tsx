import { useState } from "react";

interface Repo {
  name: string;
  description: string;
}

export function UserContext() {
  const [repos, setRepos] = useState<Repo[]>([]);

  return {
    repos,
    setRepos,
  };
}
