import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
const todoData = [
  {
    task: "Pump Iron",
    id: 1,
    completed: false
  },
  {
    task: "Get Swole",
    id: 2,
    completed: false
  },
  {
    task: "Busta Flex on Em",
    id: 3,
    completed: false
  },
  {
    task: "Get the Girl",
    id: 4,
    completed: false
  }
];
console.log(todoData);
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
      todoList: [
        ...this.state.todoList,

        {
          task: this.state.task,
          id: Date.now(),
          completed: false
        }
      ],
      task: ""
    });
  };

  toggleCompleted = id => {
    console.log(id);
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (id !== todo.id) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(todo => todo.completed === false)
    });
  };

  render() {
    return (
      <div className="body">
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todoDataList={this.state.todoList}
        />
        <TodoForm
          clearCompleted={this.clearCompleted}
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
