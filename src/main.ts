import "./style.css";

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("userinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("list")!;

const submithandler = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo = input.value;
  const newTodoBox = document.createElement("div");
  newTodoBox.id = "newTodoBox";
  form.appendChild(newTodoBox);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTodoBox.appendChild(checkbox);

  const newTask = document.createElement("label");
  newTask.innerHTML = newTodo;
  newTodoBox.appendChild(newTask);
  input.value = "";
};

form.addEventListener("submit", submithandler);
