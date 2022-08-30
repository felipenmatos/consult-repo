import { useState } from "react";

interface Repo {
  name: string;
}

export function UserContext() {
  const [nameUser, setNameUser] = useState("");

  return {
    nameUser,
    setNameUser,
  };
}
