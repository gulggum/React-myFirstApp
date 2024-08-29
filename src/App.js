// import Button from "./Button";
// import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTodo("");
    setTodoList((newTodo) => [todo, ...newTodo]);
    console.log(todoList);
  };
  const onDelete = (index) => {
    setTodoList(todoList.filter((_, todoIndex) => index !== todoIndex)); //index 는 배열숫자,즉 현재 몇번째인지 위치한 번호(0,1,2..)
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Please your Todo"
        ></input>
        <button>Submit</button>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => onDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
