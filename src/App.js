import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const todoData = [
  {
    task: "Gains",
    id: Date.now(),
    completed: false
  },
  {
    task: "Sick Nasty Guido Pump",
    id: Date.now(),
    completed: false
  },
  {
    task: "Crack Sidewalks",
    id: Date.now(),
    completed: false
  },
  {
    task: "Busta Flex On 'EM",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoData,
      task: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, { task: this.state.task }],
      task: ""
    });
  };

  render() {
    return (
      <div className="body">
        <TodoList todoDataList={this.state.todoList} />
        <TodoForm
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;

/*

- `<App />` will hold all the data needed for this project. 
It will also be the container for your Todo Components.
  - All of your application data will be stored on `<App />`.
  - All of your `handler` functions should live on `<App />`.

*/
