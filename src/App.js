import React from "react";
import "./App.css";
//Import components
import Form from "./components/Form";
import Todolist from "./components/TodoList";
import { TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <header>
          <h1>Fujun's Todo List</h1>
        </header>
        <Form />
        <Todolist />
      </div>
    </TodoProvider>
  );
}

export default App;
