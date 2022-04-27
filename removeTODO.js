import { fetchList } from "./fetchTODO.js";

export function deleteTODO(e) {
  if (e.target.value !== "Delete") return;
  const id = e.target.closest("li").dataset.id;

  const options = {
    method: "DELETE",
  };

  fetch(`http://localhost:3000/todos/${id}`, options).then((res) =>
    fetchList()
  );
}
