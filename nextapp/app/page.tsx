import { ListItemRepo } from "@/components/ListItemRepo";
import Image from "next/image";

export default async function Home() {
  const data = await fetch("https://api.github.com/users/nubank/repos").then(
    (r) => r.json()
  );

  return (
    <div>
      <ul>
        {data.map((repo) => (
          <ListItemRepo key={repo.id} repository={repo} />
        ))}
      </ul>
    </div>
  );
}
