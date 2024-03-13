import React from "react";

function ToDo({ todo, index, delToDo }) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={delToDo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
