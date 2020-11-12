import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const Form = () => {
  const { inputTextState, todosState, statusState } = useContext(TodoContext);
  const [inputText, setInputText] = inputTextState;
  const [todos, setTodos] = todosState;
  const [status, setStatus] = statusState;

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" />
      <button onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
