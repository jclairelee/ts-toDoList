import "./style.css";

interface Todo {
  task: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("userinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

//plan = arr of Todos
let plan: Todo[] = [];

const createDOMelements = (item: Todo) => {
  const newTodoBox = document.createElement("div");
  newTodoBox.id = "newTodoBox";
  form.appendChild(newTodoBox);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTodoBox.appendChild(checkbox);
  const newTask = document.createElement("label");
  newTask.innerHTML = item.task;
  newTodoBox.appendChild(newTask);
};

const submithandler = (e: SubmitEvent) => {
  e.preventDefault();

  //newTaskObj is created, which will be appended into the array of plan
  const newTaskObj: Todo = {
    task: input.value,
    completed: false,
  };
  createDOMelements(newTaskObj);
  plan.push(newTaskObj);
  console.log(plan);

  input.value = "";
};

form.addEventListener("submit", submithandler);
