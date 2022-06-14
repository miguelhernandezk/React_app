import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({ totalToDos, completedToDos, loading }){
    return(
        <React.Fragment>
            <h2 className={`ToDoCounter headCounter ${!!loading && "ToDoCounter--loading"}`}>Your tasks</h2>
            <h3 className={`ToDoCounter subCounter ${!!loading && "ToDoCounter--loading"}`}>{completedToDos} out of {totalToDos} tasks completed.</h3>
        </React.Fragment>
    );

}

export { ToDoCounter };