import React from "react";
import { FaPlusCircle, FaRegListAlt } from "react-icons/fa";
import "./EmptyToDos.css";

function EmptyToDos({error}){
    return(
            <li className="EmptyToDos">
                <span className="emptyIcon"><FaRegListAlt/></span>
                <h2>Wow! It seems you're done for today.</h2>
                <p>Hit the <span className="miniAddButton"><FaPlusCircle/></span> button to add a new task</p>
            </li>
    );
}

export { EmptyToDos };