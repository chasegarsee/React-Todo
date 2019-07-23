import React from "react";
import "./Todo.css";

function TodoForm(props) {
  return (
    <form onSubmit={props.addNewTodo}>
      <input
        className="inputForm"
        value={props.task}
        type="text"
        name="task"
        placeholder="THINGS"
        onChange={props.handleChanges}
      />
      <button className="btn" type="submit">
        Add Todo
      </button>
      <button className="btn-two" onClick={props.clearCompleted}>
        Clear
      </button>
    </form>
  );
}
export default TodoForm;

/* 

- `<TodoForm>` will hold your input field and your `Add Todo` 
and `Clear Completed` buttons.
  - Your input field should take in user input, and allow a user 
  to press `Enter` or click on the `Submit Button` to add a todo
   to your list.
  - Once a todo is submitted, the Todo List should re-render and 
  show the added todo.

*/
