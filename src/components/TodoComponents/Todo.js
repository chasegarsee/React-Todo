import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div
      className={props.todo.completed ? "completed" : "todos-task"}
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
}

export default Todo;

/*
- `<Todo />` is a component that takes in the 
`todo` data and displays the task to the screen.
*/
