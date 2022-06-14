import React from "react";
import "./ToDoCounter.css";
import  { ToDoContext } from "../ToDoContext"
import { FaAccusoft } from "react-icons/fa";

// const estilos = {
//     color: "red",
//     backgroundColor: "yellow",

// };

function ToDoCounter(){
    const { totalToDos, completedToDos } = React.useContext(ToDoContext);
    return(
        <React.Fragment>
            <h2 className="ToDoCounter headCounter">Your tasks</h2>
            <h3 className="ToDoCounter subCounter">{completedToDos} out of {totalToDos} tasks completed.</h3>
        </React.Fragment>
    );

}

export { ToDoCounter };