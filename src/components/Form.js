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
    const newTodo = { text: inputText, completed: false, _id: Math.random() };
    setTodos([...todos, newTodo]);
    postTodo(newTodo);
    setInputText("");
  };

  const postTodo = async (input) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: input.text,
        completed: input.completed,
        _id: input._id,
      }),
    };
    const response = await fetch(
      "http://localhost:3001/api/todos",
      requestOptions
    );
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
