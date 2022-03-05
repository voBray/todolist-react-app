// 3 using useStatehook    // 5 using ref hook to reference html so we can store info from text form  //using useEffect to store entries in local storage
import React, { useState, useRef, useEffect } from "react";
// 2 importing ToDoList component
import ToDoList from "./ToDoList";
// 6 Linking library for unique id's
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  // 5 access to the input Element and storing it in our already existing list array in function
  const listNameRef = useRef();

  // 8 Loading our entries from local storage, function will be called once, if array is empty
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(local_Storage_Key));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // 7 anytime anything in the array changes we going to run this function, anytime array changes we will save our entries
  const local_Storage_Key = "todoApp.todos";
  useEffect(() => {
    localStorage.setItem(local_Storage_Key, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo() {
    const name = listNameRef.current.value;
    if (name === "") return;
    setTodos((previousTodos) => {
      return [...previousTodos, { id: uuid(), name: name, complete: false }];
    });
    listNameRef.current.value = null;
  }
  //  8 deleting entries......
  function handleClearTodo() {}

  return (
    // 1 Creating new ToDoList component
    <>
      {/* 4 Adding prop for our entries */}
      <ToDoList todos={todos} />
      <input ref={listNameRef} type="text" />
      {/* 5 Adding event listener for new entries */}
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleClearTodo}>Clear</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
