import "./style.css";

interface Todo {
  task: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("userinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

//plan = arr of Todos
let plan: Todo[] = getLocalStorageItems();
//display every obj that are stored in the arr named plan
plan.forEach(createDOMelements);
function getLocalStorageItems(): Todo[] {
  const planJSON = localStorage.getItem("todos");
  if (planJSON === null) {
    return [];
  } else {
    return JSON.parse(planJSON);
  }
}

function createDOMelements(item: Todo) {
  const newTodoBox = document.createElement("div");
  newTodoBox.id = "newTodoBox";
  form.appendChild(newTodoBox);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newTodoBox.appendChild(checkbox);
  const newTask = document.createElement("label");
  newTask.innerHTML = item.task;
  newTodoBox.appendChild(newTask);
}

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
  localStorage.setItem("todos", JSON.stringify(plan));
  input.value = "";
};

form.addEventListener("submit", submithandler);
