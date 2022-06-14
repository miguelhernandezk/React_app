import React from "react";
import { useToDos } from "./useToDos"
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { Modal } from "../Modal"
import { ToDoForm } from "../ToDoForm"
import { ToDosError } from "../ToDosError";
import { ToDosLoading } from "../ToDosLoading";
import { EmptyToDos } from "../EmptyToDos";
import { ToDoHeader } from "../ToDoHeader";

// import './App.css';

function App() {
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
    addToDo, 
} = useToDos();
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

    {/* Render props pattern
    <ToDoList 
      error={ error }
      loading = { loading }
      searchedToDos = { searchedToDos }
      searchText = { searchValue }
      totalToDos = {totalToDos}
      onError={() => <ToDosError/>}
      onLoading={() => <ToDosLoading/>}
      onEmptyToDos={() => <EmptyToDos/>}
      onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
      render={toDo => (
        <ToDoItem
          key={toDo.text} 
          text={toDo.text} 
          completed={toDo.completed} 
          onComplete={() => completeToDo(toDo.text)}
          onDelete={() => deleteToDo(toDo.text)}
        />
      )}
    /> */}

    <ToDoList
      error={ error }
      loading = { loading }
      searchedToDos = { searchedToDos }
      searchText = { searchValue }
      totalToDos = {totalToDos}
      onError={() => <ToDosError/>}
      onLoading={() => <ToDosLoading/>}
      onEmptyToDos={() => <EmptyToDos/>}
      onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
    >
      {toDo => (
        <ToDoItem
          key={toDo.text} 
          text={toDo.text} 
          completed={toDo.completed} 
          onComplete={() => completeToDo(toDo.text)}
          onDelete={() => deleteToDo(toDo.text)}
        />
      )}
    </ToDoList>

    {/* Original pattern:
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
    </ToDoList> */}

      {!!openModal && (
        <Modal>
          <ToDoForm 
            addToDo = { addToDo }
            setOpenModal = { setOpenModal }
          />
        </Modal>
      )}
    <CreateToDoButton
      setOpenModal={setOpenModal}
    />
  </React.Fragment>
  );
}

export default App;
