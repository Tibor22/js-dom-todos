const listContainer = document.querySelector("#todo-list");
export function addTODO(e) {
  e.preventDefault();
  const title = e.target[0].value;
  e.target[0].value = "";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  };

  fetch(`http://localhost:3000/todos`, options)
    .then((res) => res.json())
    .then((data) => {
      const html = `<li data-id = '${data.id}'>
    ${data.title}
    <input type="submit" value="Complete">
    <input type="submit" value="Delete">
  </li>`;
      const li = document.querySelector(`[data-id="${data.id}"]`);
      if (data.completed) li.classList.add("completed");

      listContainer.insertAdjacentHTML("beforeend", html);
    });
}
