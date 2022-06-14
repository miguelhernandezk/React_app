import React from "react";
import { AppUI } from "./AppUI";
import { ToDoProvider } from "../ToDoContext"

// import './App.css';


function App(){
  const[state, setState] = React.useState("estado compartido");   

  return(
    <React.Fragment>
      <ToDoHeader>
        <ToDoCounter/>
        <ToDoSearch/>
      </ToDoHeader>
      <ToDoList>
        <ToDoItem state = { state }/>
      </ToDoList>
    </React.Fragment>
  );
}

function ToDoHeader({ children }){
  return(
    <header>
      { children }
    </header>
  );
}

function ToDoList({ children }){
  return(
    <section className="ToDoList-container">
      { children }
    </section>
  );
}

function ToDoCounter(){
  return <p>ToDoCounter</p>;
}

function ToDoSearch(){
  return <p>ToDoSearch</p>;
}

function ToDoItem({state}){
  return <p>ToDoItem: { state }</p>;
}
// function App() {
//   return (
//     <ToDoProvider>
//       <AppUI/>
//     </ToDoProvider>
//   );
// }

export default App;
