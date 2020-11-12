import React, { useContext } from "react";
//Import components
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todosState, filteredTodosState } = useContext(TodoContext);
  const [todos, setTodos] = todosState;
  const [filteredTodos, setFilteredTodos] = filteredTodosState;

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((filteredTodo) => (
          <Todo
            key={filteredTodo.id}
            filteredTodo={filteredTodo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
