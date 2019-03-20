import React from "react";
import "./Todo.css";
function Todo(props) {
  return <div className="todos-task">{props.todos.task}</div>;
}

export default Todo;

/*
- `<Todo />` is a component that takes in the 
`todo` data and displays the task to the screen.
*/
