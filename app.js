import { fetchList } from "./fetchTODO.js";
import { addTODO } from "./addTODO.js";
import { updateTODO } from "./updateTODO.js";
import { deleteTODO } from "./removeTODO.js";
const listContainer = document.querySelector("#todo-list");
const form = document.querySelector("form");

fetchList();
form.addEventListener("submit", addTODO);
listContainer.addEventListener("click", updateTODO);
listContainer.addEventListener("click", deleteTODO);

export function completeBtn() {
  const btn = document.createElement("input");
  btn.value = "Complete";
  btn.type = "submit";
  return btn;
}
export function deleteBtn() {
  const btn = document.createElement("input");
  btn.value = "Delete";
  btn.type = "submit";
  return btn;
}
