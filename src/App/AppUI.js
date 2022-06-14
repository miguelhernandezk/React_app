import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoContext } from "../ToDoContext"
import { Modal } from "../Modal"
import { ToDoForm } from "../ToDoForm"
import { ToDosError } from "../ToDosError";
import { ToDosLoading } from "../ToDosLoading";
import { EmptyToDos } from "../EmptyToDos";
import { ToDoHeader } from "../ToDoHeader";

function AppUI(){
    const { error,
        loading,
        searchedToDos, 
        completeToDo, 
        deleteToDo,
        openModal,
        setOpenModal,
        totalToDos, 
        completedToDos,
        searchValue, 
        setSearchValue,
    } = React.useContext(ToDoContext);
    return(
    <React.Fragment>
      <ToDoHeader>
        <ToDoCounter
          totalToDos = { totalToDos }
          completedToDos = { completedToDos }
        />
        <ToDoSearch
          searchValue = { searchValue }
          setSearchValue = { setSearchValue }
        />
      </ToDoHeader>
    
        <ToDoList>
            {error && <ToDosError error={error}/>}
            {loading && <ToDosLoading/>}
            {(!loading && !searchedToDos.length) && <EmptyToDos/>}

            {searchedToDos.map(toDo => (
            <ToDoItem 
                key={toDo.text} 
                text={toDo.text} 
                completed={toDo.completed} 
                onComplete={() => completeToDo(toDo.text)}
                onDelete={() => deleteToDo(toDo.text)}
                />
            ))} 
        </ToDoList>
        {!!openModal && (
          <Modal>
            <ToDoForm/>
          </Modal>
        )}
      <CreateToDoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    );
}

export { AppUI };