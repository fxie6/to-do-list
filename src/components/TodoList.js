import React, { useContext } from "react";
//Import components
import Todo from "./Todo";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todosValue, filteredTodosValue } = useContext(TodoContext);
  const [todos, setTodos] = todosValue;
  const [filteredTodos, setFilteredTodos] = filteredTodosValue;

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
