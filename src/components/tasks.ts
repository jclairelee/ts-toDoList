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
  const editOldTask = document.createElement("img");

  newTodoBox.className = "todos__newTodoBox";
  form.appendChild(newTodoBox);

  checkbox.type = "checkbox";
  checkbox.className = "todos__checkbox";
  newTodoBox.appendChild(checkbox);
  checkbox.checked = item.completed;

  newTask.className = "todos__textlist";
  newTask.textContent = item.task;
  newTodoBox.appendChild(newTask);

  // priority
  priority.className = "todos__pri";
  priority.textContent = item.priority;

  if (item.priority === "low") {
    priority.style.backgroundColor = "#FF9913";
  } else if (item.priority === "high") {
    priority.style.backgroundColor = "#D2222D";
  } else {
    priority.style.backgroundColor = "#238823";
  }
  newTodoBox.appendChild(priority);

  // delete button
  deleteOldTask.src = "/bin.png";
  deleteOldTask.className = "todos__delete";
  newTodoBox.appendChild(deleteOldTask);

  deleteOldTask.addEventListener("click", () =>
    removeOldList(newTodoBox, item, plan)
  );

  // edit button
  editOldTask.src = "/edit.png";
  editOldTask.className = "todos__edit";
  newTodoBox.appendChild(editOldTask);

  editOldTask.addEventListener("click", () => {
    const currentText = newTask.innerText.trim();
    newTask.style.display = "none";

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = currentText;
    newTodoBox.appendChild(editInput);
    editInput.focus();

    editInput.addEventListener("blur", () => {
      const newText = editInput.value.trim();

      // display the updated text
      if (newText !== "") {
        newTask.innerText = newText;
      }

      // remove the edit-input
      if (editInput.parentNode !== null) {
        editInput.parentNode.removeChild(editInput);
      }

      newTask.style.display = "block";
    });
  });

  // checkbox
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
  updateTaskCount(plan);
}

function updateTaskCount(plan: Todo[]) {
  const totalnum = document.querySelector(
    "h2.todos__total"
  ) as HTMLHeadingElement;
  totalnum.innerHTML = `${plan.length} Tasks`;
}
