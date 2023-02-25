import "./style.scss";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const input = document.getElementById("userinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

//plan = arr of Todos
const plan: Todo[] = getLocalStorageItems();

const todaysDate = document.querySelector("h1")! as HTMLHeadingElement;
todaysDate.innerHTML = getDate();

const totalnum = document.querySelector("h2")! as HTMLHeadingElement;
totalnum.innerHTML = `${plan.length} Tasks`;

//display every obj that are stored in the arr named plan
plan.forEach(createDOMelements);

function getDate() {
  let date = new Date();
  let month: string;
  switch (date.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "not found!";
  }
  let day = date.getDate();
  let yr = date.getFullYear();
  return `${month} ${day}, ${yr}`;
}
function getLocalStorageItems(): Todo[] {
  const planJSON = localStorage.getItem("todos");
  if (planJSON === null) {
    return [];
  } else {
    return JSON.parse(planJSON);
  }
}
function updateStatus() {
  localStorage.setItem("todos", JSON.stringify(plan));
  totalnum.innerHTML = `${plan.length} Tasks`;
  window.location.reload();
}
function removeOldList(
  elToDelete: HTMLDivElement,
  clickedItem: HTMLImageElement
) {
  elToDelete.remove();
  const current = clickedItem.previousElementSibling;
  const toBeDeleted = current?.innerHTML;

  const listJSON = localStorage.getItem("todos");
  if (listJSON !== null) {
    const taskArr = JSON.parse(listJSON);
    console.log(taskArr);
    const result = taskArr.filter((item: any) => {
      return item.task !== toBeDeleted;
    });
    console.log(result);
    localStorage.setItem("todos", JSON.stringify(result));
    totalnum.innerHTML = `${result.length} Tasks`;
    window.location.reload();
  }
}
function createDOMelements(item: Todo) {
  const newTodoBox = document.createElement("div");
  const checkbox = document.createElement("input");
  const newTask = document.createElement("label");
  const deleteOldTask = document.createElement("img");

  newTodoBox.className = "todos__newTodoBox";
  form.appendChild(newTodoBox);

  checkbox.type = "checkbox";
  checkbox.className = "todos__checkbox";
  newTodoBox.appendChild(checkbox);
  checkbox.checked = item.completed;

  newTask.className = "todos__textlist";
  newTask.innerHTML = item.task;
  newTodoBox.appendChild(newTask);

  deleteOldTask.src = "/delete.png";
  deleteOldTask.className = "todos__delete";
  newTodoBox.appendChild(deleteOldTask);

  deleteOldTask.addEventListener("click", () =>
    removeOldList(newTodoBox, deleteOldTask)
  );
  checkbox.addEventListener("change", function () {
    item.completed = checkbox.checked;
    updateStatus();
  });
}

const submithandler = (e: SubmitEvent) => {
  e.preventDefault();

  //newTaskObj is created, which will be appended into the array of plan
  const newTaskObj: Todo = {
    id: plan.length + 1,
    task: input.value,
    completed: false,
  };
  createDOMelements(newTaskObj);
  plan.push(newTaskObj);
  console.log(plan);
  localStorage.setItem("todos", JSON.stringify(plan));
  updateStatus();
  input.value = "";
};

form.addEventListener("submit", submithandler);
