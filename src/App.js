import React from "react";
import "./App.css";
//Import components
import Form from "./components/Form";
import Todolist from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Fujun's Todo List</h1>
      </header>
      <Form />
      <Todolist />
    </div>
  );
}

export default App;
