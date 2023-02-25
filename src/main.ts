import "./style.css";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const input = document.getElementById("userinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

//plan = arr of Todos
const plan: Todo[] = getLocalStorageItems();
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
function updateStatus() {
  localStorage.setItem("todos", JSON.stringify(plan));
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
  }
}
function createDOMelements(item: Todo) {
  const newTodoBox = document.createElement("div");
  const checkbox = document.createElement("input");
  const newTask = document.createElement("label");
  const deleteOldTask = document.createElement("img");

  newTodoBox.className = "newTodoBox";
  form.appendChild(newTodoBox);

  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  newTodoBox.appendChild(checkbox);
  checkbox.checked = item.completed;

  newTask.className = "text-list";
  newTask.innerHTML = item.task;
  newTodoBox.appendChild(newTask);

  deleteOldTask.src = "/delete.png";
  deleteOldTask.className = "delete";
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
