window.onload = function () {
  fetch("https://api.github.com/users/nubank/repos")
    .then((r) => r.json())
    .then((data) => {
      const list = document.createElement("ul");

      data.forEach((repo) => {
        const item = document.createElement("li");
        item.innerHTML = repo.name;

        if (repo.stargazers_count > 5) {
          item.innerHTML += " (popular)";
        }

        item.addEventListener("click", () => {
          alert(repo.node_id);
        });

        list.appendChild(item);
      });

      document.body.appendChild(list);
    });
};
