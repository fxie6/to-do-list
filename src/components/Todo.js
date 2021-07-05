import React from "react";

const Todo = ({ filteredTodo, todos, setTodos }) => {
  const todoDeleteHandler = () => {
    setTodos(todos.filter((e) => e._id !== filteredTodo._id));
    deleteTodo(filteredTodo);
  };

  const todoCompleteHandler = () => {
    setTodos(
      todos.map((e) => {
        if (e._id === filteredTodo._id) {
          e.completed = !e.completed;
          updateTodo(e);
        }
        return e;
      })
    );
  };

  const updateTodo = async (input) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: input.text,
        completed: input.completed,
        _id: input._id,
      }),
    };
    const response = await fetch(
      `http://localhost:3001/api/todos/${input._id}`,
      requestOptions
    );
  };

  const deleteTodo = async (input) => {
    await fetch(`http://localhost:3001/api/todos/${input._id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="todo">
      <li
        className={filteredTodo.completed === false ? "todo-item" : "completed"}
      >
        {filteredTodo.text}
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
