import React from "react";
import { FaPlusCircle, FaSadCry } from "react-icons/fa";
import "./ToDosError.css"

function ToDosError({error}){
    return (
        <li className="ToDosError">
                <span className="errorIcon"><FaSadCry/></span>
                <h2>Sorry! It's not you, it's us</h2>
                <p>Please reload page.</p>
        </li>
    );
}

export { ToDosError };