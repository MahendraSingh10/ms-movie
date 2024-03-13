import React from "react";
import ToDo from "./ToDo";

function ToDoContainer({ todos, delToDo }) {
  return (
    // <div className="container">
    //   {todos.map((todo)=> (<ToDo key={todo} todo={todo} />))}
    // </div>
    <div className="container">{todos.map((todo, i) => {
        return (
            <ToDo key={todo} todo={todo} index={i} delToDo={delToDo}  />
        )
    })}</div>
  );
}

export default ToDoContainer;
