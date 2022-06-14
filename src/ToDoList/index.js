import React from "react";
import "./ToDoList.css";

function ToDoList(props){
    return(
        <section className="ToDoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedToDos.length) && props.onEmptyToDos()}

            {props.searchedToDos.map(props.render)}

            <ul>
            {props.children}
            </ul>
        </section>
    );
}

export { ToDoList };