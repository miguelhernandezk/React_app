import React from "react";
import "./ToDoItem.css";


function ToDoItem(props){
    const onComplete = () => {
        alert("Se completó: " + props.text + ", 🐕 ");
    }

    const onDelete = () => {
        alert("Borraste: " + props.text + ", 🐕 ");
    }

    return(
        <li className="ToDoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={onComplete}>
            √
        </span>
        <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
            {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={onDelete}>
            X
        </span>
        </li>
    );
}

export { ToDoItem };