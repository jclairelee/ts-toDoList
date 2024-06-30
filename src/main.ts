import "./style.scss";
import { renderTodayDate } from "./components/date";
import {
  getLocalStorageItems,
  updateLocalStorage,
} from "./components/localStorage";
import { createTaskElement } from "./components/tasks";
import { createMenuButton } from "./components/menuButton";

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

const input = document.getElementById("task")! as HTMLInputElement;
const priorityInput = document.getElementById(
  "userInput-priority"
)! as HTMLSelectElement;
const form = document.querySelector("form")! as HTMLFormElement;

const plan: Todo[] = getLocalStorageItems();

renderTodayDate();
updateTaskCount(plan);

plan.forEach((item) => createTaskElement(item, form, plan));

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  if (input.value === "" || input.value === null) {
    alert("Task cannot be empty");
    return;
  }

  const newTaskObj: Todo = {
    id: plan.length + 1,
    task: input.value,
    completed: false,
    priority: priorityInput.value as "low" | "medium" | "high",
  };
  console.log(newTaskObj);
  createTaskElement(newTaskObj, form, plan);
  plan.push(newTaskObj);
  updateLocalStorage(plan);
  updateTaskCount(plan);

  input.value = "";
  priorityInput.value = "low";
});

createMenuButton(form);

function updateTaskCount(plan: Todo[]) {
  const totalnum = document.querySelector(
    "h2.todos__total"
  ) as HTMLHeadingElement;
  totalnum.innerHTML = `${plan.length} Tasks`;
}
