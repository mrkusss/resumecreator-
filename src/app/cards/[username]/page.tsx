import { useParams } from "next/navigation";

export default function UserCardPage() {
  const params = useParams();
  const username = params?.username || "user";
  return (
    <main>
      <h1>Resume: {username}</h1>
      <p>This is resume of {username}.</p>
    </main>
  );
}
