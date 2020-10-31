import React, { useState, useEffect } from "react";
import "./App.css";
//Import components
import Form from "./components/Form";
import Todolist from "./components/TodoList";

function App() {
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
    <div className="App">
      <header>
        <h1>Fujun's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
