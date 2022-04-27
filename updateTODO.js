import { fetchList } from "./fetchTODO.js";

export function updateTODO(e) {
  const id = e.target.closest("li").dataset.id;
  if (e.target.value !== "Complete") return;
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      completed: true,
    }),
    headers: { "Content-type": "application/json" },
  };

  fetch(`http://localhost:3000/todos/${id}`, options)
    .then((res) => res.json())
    .then((todo) => {
      if (todo.completed) e.target.closest("li").classList.add("completed");
    });
}
