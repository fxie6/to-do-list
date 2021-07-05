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

  // // Save to local
  // const saveLocalTodos = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  // // Get local todos
  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let localTodos = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(localTodos);
  //   }
  // };

  // Get todos from mongo
  const getDbTodos = async () => {
    const response = await fetch("http://localhost:3001/api/todos");
    const dbTodos = await response.json();
    setTodos(dbTodos);
  };

  // Run once when app starts
  // Call api to get todos if exist
  useEffect(() => {
    // getLocalTodos();
    getDbTodos();
  }, []);

  useEffect(() => {
    selectHandler();
    // saveLocalTodos();
  }, [status, todos]);

  return (
    <TodoContext.Provider
      value={{
        inputTextState: [inputText, setInputText],
        todosState: [todos, setTodos],
        statusState: [status, setStatus],
        filteredTodosState: [filteredTodos, setFilteredTodos],
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
