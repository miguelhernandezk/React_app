import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "../ToDoContext"
import { ToDoCounter } from "../ToDoCounter";

// import './App.css';


function App() {
  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;
