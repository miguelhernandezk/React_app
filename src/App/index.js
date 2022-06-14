import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "../ToDoContext"
import { ToDoCounter } from "../ToDoCounter";

// import './App.css';


function App(){
  return(
    <React.Fragment>
      <ToDoHeader/>
      <TodoList/>
    </React.Fragment>
  );
}

function ToDoHeader(){
  return(
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
    </React.Fragment>
  );
}

function ToDoList(){
  return(
    <React.Fragment>
      <ToDoItems/>
    </React.Fragment>
  );
}

function ToDoCounter(){
  return <p>ToDoCounter</p>;
}

function ToDoSearch(){
  return <p>ToDoSearch</p>;
}

function ToDoItem(){
  return ;
}
// function App() {
//   return (
//     <ToDoProvider>
//       <AppUI/>
//     </ToDoProvider>
//   );
}

export default App;
