import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  const todoDeleteHandler = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const todoCompleteHandler = () => {
    setTodos(
      todos.map((e) => {
        if (e.id === todo.id) {
          e.completed = !e.completed;
        }
        return e;
      })
    );
  };

  return (
    <div className="todo">
      <li className={todo.completed === false ? "todo-item" : "completed"}>
        {todo.text}
      </li>
      <button onClick={todoCompleteHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={todoDeleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
