import React from "react";
import "./CreateToDoButton.css";

function CreateToDoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    };
    return(
        <button className="CreateToDoButton" onClick={() => onClickButton("Hubo un click perro")}>+</button>
    );
}

export { CreateToDoButton };