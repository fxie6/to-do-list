import React, { useState } from "react";
import "./App.css";
//Import components
import Form from "./components/Form";
import Todolist from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
      />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
