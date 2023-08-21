"use client";

export function ListItemRepo({ repository }) {
  return (
    <li
      key={repository.id}
      onClick={() => {
        alert(repository.node_id);
      }}
    >
      {repository.name} {repository.stargazers_count > 5 && "( popular)"}
    </li>
  );
}
