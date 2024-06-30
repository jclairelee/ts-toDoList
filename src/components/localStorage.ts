import { Todo } from "../main";

export function getLocalStorageItems(): Todo[] {
  const planJSON = localStorage.getItem("todos");
  return planJSON ? JSON.parse(planJSON) : [];
}

export function updateLocalStorage(plan: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(plan));
}
