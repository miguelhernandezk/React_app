import React from "react";
import {useLocalStorage} from "./useLocalStorage.js"


function useToDos(){
    const [openModal, setOpenModal] = React.useState(false);
    const {
        item: toDos,
        saveItem: saveToDos,
        synchronizeItem: synchronizeToDos,
        loading, 
        error
    } = useLocalStorage("TODOS_V1", []);
    const [searchValue, setSearchValue] = React.useState("");
    const [toDoStatus, setToDoStatus] = React.useState(false);

    const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;

    let searchedToDos = [];

    if (!searchValue.length >= 1){
        searchedToDos = toDos
    }else{
        searchedToDos = toDos.filter(toDo => {
        const toDoText = toDo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return toDoText.includes(searchText);
    })
    }

    const completeToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);

        const newToDos = [...toDos];
        newToDos[toDoIndex].completed = toDoStatus;
        setToDoStatus(!toDoStatus);
        saveToDos(newToDos);
    };

    const deleteToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);

        const newToDos = [...toDos];
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos);
    };

    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
            completed: false,
            text,
        });
        saveToDos(newToDos);
    };


    return (
        {
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            addToDo,
            openModal,
            setOpenModal,
            synchronizeToDos,
        }
    );
}

export { useToDos }; 