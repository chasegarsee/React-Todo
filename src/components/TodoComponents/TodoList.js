import React from "react";
import "./Todo.css";

import Todo from "./Todo";

function TodoList(props) {
  return (
    <div className="todo-container">
      <h1>Things:</h1>
      {props.todoDataList.map((todo, id) => {
        return (
          <Todo
            className="todos-task"
            todo={todo}
            key={todo.id}
            toggleCompleted={props.toggleCompleted}
          />
        );
      })}
    </div>
  );
}

export default TodoList;

/* 

- `<TodoList />` receives your Todos 
array and iterates 
over the list generating a new `<Todo />` 
for each element in the array.

*/
