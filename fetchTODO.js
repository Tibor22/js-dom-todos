const listContainer = document.querySelector("#todo-list");

export function fetchList() {
  fetch(`http://localhost:3000/todos`)
    .then((res) => res.json())
    .then((data) => {
      listContainer.innerHTML = "";
      data.forEach((item) => {
        const html = `<li data-id = '${item.id}'>
        ${item.title}
        <input type="submit" value="Complete">
        <input type="submit" value="Delete">
      </li>`;

        listContainer.insertAdjacentHTML("beforeend", html);
        const li = document.querySelector(`[data-id="${item.id}"]`);
        if (item.completed) li.classList.add("completed");
      });
    });
}
