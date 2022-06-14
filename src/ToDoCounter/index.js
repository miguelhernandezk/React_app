import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({ totalToDos, completedToDos }){
    return(
        <React.Fragment>
            <h2 className="ToDoCounter headCounter">Your tasks</h2>
            <h3 className="ToDoCounter subCounter">{completedToDos} out of {totalToDos} tasks completed.</h3>
        </React.Fragment>
    );

}

export { ToDoCounter };