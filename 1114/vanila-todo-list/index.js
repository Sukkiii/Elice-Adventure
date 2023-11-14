const items = [];
// {
//   id: number;
//   content: string;
//   isCompleted: boolean;
// } []
let filter = "all";
// 'all' | 'active' | 'completed'

const addButton = document.getElementById("add-todo");
const inputElement = document.getElementById("todo-input");
const filterAllButton = document.getElementById("filter-all");
const filterActiveButton = document.getElementById("filter-active");
const filterCompletedButton = document.getElementById("filter-completed");
const todoListElement = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const inputValue = inputElement.value;
  items.push({
    id: items.length,
    content: inputValue,
    isCompleted: false,
  });
  inputElement.value = "";

  // TODO: UI 업데이트
  renderItems();
});

filterAllButton.addEventListener("click", () => {
  console.log(filterAllButton);
  filter = "all";

  // TODO: UI 업데이트
  renderItems();
});

filterActiveButton.addEventListener("click", () => {
  filter = "active";

  // TODO: UI 업데이트
  renderItems();
});

filterCompletedButton.addEventListener("click", () => {
  filter = "completed";

  // TODO: UI 업데이트
  renderItems();
});

function renderItems() {
  let filteredItems;

  if (filter === "active") {
    filteredItems = items.filter((items) => !items.isCompleted);
  } else if (filter === "completed") {
    filteredItems = items.filter((item) => item.isCompleted);
  } else {
    filteredItems = [...items];
  }

  todoListElement.innerHTML = "";
  filteredItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.content;
    listItem.style.textDecoration = item.isCompleted ? "line-through" : "none";

    listItem.addEventListener("click", () => {
      items[index].isCompleted = !items[index].isCompleted;
      renderItems();
    });

    todoListElement.appendChild(listItem);
  });
}
