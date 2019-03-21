import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const todoData = [
  {
    task: "Obtain Gains",
    id: Date.now(),
    completed: false
  },
  {
    task: "Aquire the Sickest of Guido Pumps",
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

  clearTodo = event => {
    event.preventDefault();
    const newList = this.state.todoList.filter(
      element => element.completed === false
    );
    this.setState({
      todoList: newList
    });
  };

  render() {
    return (
      <div className="body">
        <h1>Things to do at the Pumpatorium</h1>
        <TodoList todoDataList={this.state.todoList} />
        <TodoForm
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
          clearTodo={this.clearTodo}
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
