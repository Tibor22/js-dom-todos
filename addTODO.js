import { deleteBtn, completeBtn } from "./app.js";
const listContainer = document.querySelector("#todo-list");
export function addTODO(e) {
  e.preventDefault();
  const title = e.target[0].value;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  };

  fetch(`http://localhost:3000/todos`, options)
    .then((res) => res.json())
    .then((data) => {
      const li = document.createElement("li");
      li.innerText = data.title;
      li.dataset.id = data.id;
      if (data.completed) li.classList.add("completed");
      if (!data.completed) {
        li.append(completeBtn());
      }
      li.append(deleteBtn());
      listContainer.append(li);
    });
}
