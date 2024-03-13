import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputContainer from "./Components/InputContainer";
import ToDoContainer from "./Components/ToDoContainer";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setToDo] = useState([]);

  function writeToDo(e) {
    setInputValue(e.target.value);
  }
  function addToDo() {
    if (inputValue != "") {
      setToDo((previous) => [...previous, inputValue]);
    }
  }
  function delToDo(todoIndex) {
    // setToDo((preToDos)=>preToDos.filter((preToDos,prevTodoIndex)=>{
    //   return todoIndex != prevTodoIndex;
    // }))
    // setToDo((prevToDos) => prevToDos.filter((prevToDos, prevToDosIndex) => {
    //   return prevToDosIndex != todoIndex;
    // }));
    const result = todo.filter((item, prevIndex)=>{
      console.log(prevIndex)
      return prevIndex != todoIndex;
    })
    //setToDo(result);
    console.log(result)
    // console.log(todo.filter((item, prevIndex)=>{
    //   console.log(prevIndex)
    //   return prevIndex != todoIndex;
    // }))
  }
  return (
    <>
      <main>
        <h1>To do list</h1>
        <InputContainer
          inputValue={inputValue}
          writeToDo={writeToDo}
          addToDo={addToDo}
        />
        <ToDoContainer todos={todo} delToDo={delToDo} />
      </main>
    </>
  );
}

export default App;
