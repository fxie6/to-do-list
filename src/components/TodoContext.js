import React, { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const selectHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((e) => e.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((e) => e.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    selectHandler();
  }, [status, todos]);

  return (
    <TodoContext.Provider
      value={{
        inputTextValue: [inputText, setInputText],
        todosValue: [todos, setTodos],
        statusValue: [status, setStatus],
        filteredTodosValue: [filteredTodos, setFilteredTodos],
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
