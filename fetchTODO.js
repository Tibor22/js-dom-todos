import { deleteBtn, completeBtn } from "./app.js";
const listContainer = document.querySelector("#todo-list");

export function fetchList() {
  fetch(`http://localhost:3000/todos`)
    .then((res) => res.json())
    .then((data) => {
      listContainer.innerHTML = "";
      data.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item.title;
        li.dataset.id = item.id;
        if (item.completed) li.classList.add("completed");
        if (!item.completed) {
          li.append(completeBtn());
        }
        li.append(deleteBtn());
        listContainer.append(li);
      });
    });
}
