// import logo from "./logo.svg";
import React from "react";
import "./App.css";

// 데이터 > 값, 바뀔 수 있는 값
// state
function App() {
  const [items, setItems] = React.useState([]);
  const [filter, setFilter] = React.useState("all");

  const [inputValue, setInputValue] = React.useState("");

  const filteredItems = React.useMemo(() => {
    if (filter === "active") {
      return items.filter((item) => {
        return !item.isCompleted;
      });
    } else if (filter === "completed") {
      return items.filter((item) => {
        return item.isCompleted;
      });
    } else {
      return items;
    }
  }, [items, filter]);

  return (
    <div className="container">
      <input
        type="text"
        id="todo-input"
        placeholder="할 일 추가"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        id="add-todo"
        onClick={() => {
          setItems([
            ...items,
            {
              id: items.length,
              content: inputValue,
              isCompleted: false,
            },
          ]);
          setInputValue("");
        }}
      >
        추가
      </button>
      <div className="spacing-10"></div>
      <div className="filters">
        <button
          id="filter-all"
          onClick={() => {
            setFilter("all");
          }}
        >
          전체보기
        </button>
        <button
          id="filter-active"
          onClick={() => {
            setFilter("active");
          }}
        >
          진행중
        </button>
        <button
          id="filter-completed"
          onClick={() => {
            setFilter("completed");
          }}
        >
          완료됨
        </button>
      </div>
      <ul id="todo-list">
        {filteredItems.map((item, index) => {
          return (
            <li
              key={item.id}
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
              onClick={() => {
                const newItems = [...items];
                newItems[index].isCompleted = !newItems[index].isCompleted;
                setItems(newItems);
              }}
            >
              {item.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
