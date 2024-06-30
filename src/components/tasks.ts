import { Todo } from "../main";
import { updateLocalStorage } from "./localStorage";

export function createTaskElement(
  item: Todo,
  form: HTMLFormElement,
  plan: Todo[]
) {
  const newTodoBox = document.createElement("div");
  const checkbox = document.createElement("input");
  const newTask = document.createElement("label");
  const priority = document.createElement("span");
  const deleteOldTask = document.createElement("img");

  newTodoBox.className = "todos__newTodoBox";
  form.appendChild(newTodoBox);

  checkbox.type = "checkbox";
  checkbox.className = "todos__checkbox";
  newTodoBox.appendChild(checkbox);
  checkbox.checked = item.completed;

  newTask.className = "todos__textlist";
  newTask.textContent = item.task;
  newTodoBox.appendChild(newTask);

  priority.className = "todos__pri";
  priority.textContent = item.priority;
  newTodoBox.appendChild(priority);

  deleteOldTask.src = "/delete.png";
  deleteOldTask.className = "todos__delete";
  newTodoBox.appendChild(deleteOldTask);

  deleteOldTask.addEventListener("click", () =>
    removeOldList(newTodoBox, item, plan)
  );

  checkbox.addEventListener("change", function () {
    item.completed = checkbox.checked;
    updateStatus(plan);
  });
}

function removeOldList(elToDelete: HTMLDivElement, item: Todo, plan: Todo[]) {
  elToDelete.remove();

  const updatedPlan = plan.filter((task) => task.id !== item.id);
  updatePlan(updatedPlan, plan);
}

function updatePlan(updatedPlan: Todo[], plan: Todo[]) {
  plan.splice(0, plan.length, ...updatedPlan);
  updateLocalStorage(updatedPlan);
  updateTaskCount(updatedPlan); // Update task count
}

function updateStatus(plan: Todo[]) {
  updateLocalStorage(plan);
  updateTaskCount(plan); // Update task count
}

function updateTaskCount(plan: Todo[]) {
  const totalnum = document.querySelector(
    "h2.todos__total"
  ) as HTMLHeadingElement;
  totalnum.innerHTML = `${plan.length} Tasks`;
}
