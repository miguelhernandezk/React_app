import React from "react";
import "./ToDosLoading.css";

function ToDosLoading({error}){
    return (
        <div className="LoadingToDo-container">
            <span className="LoadingToDo-completeIcon"></span>
            <p className="LoadingToDo-text">working</p>
            <span className="LoadingToDo-deleteIcon"></span>
        </div>
    );
}

export { ToDosLoading };