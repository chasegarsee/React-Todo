import React from "react";
import Todo from "./Todo";
import "./Todo.css";
function TodoList(props) {
  return (
    <div className="todos-task">
      {props.todoDataList.map((todoParam, index) => {
        return <Todo todos={todoParam} key={index} />;
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
