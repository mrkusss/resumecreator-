"use client";

import { useParams } from "next/navigation";

export function Cards() {
  const params = useParams();
  const username = params?.username || "user";
  return (
    <main>
      <h1>Resume: {username}</h1>
      <p>This is resume of {username}.</p>
    </main>
  );
}
