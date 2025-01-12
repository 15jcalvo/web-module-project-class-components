import React, { useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { render } from 'react-dom';
import Item from '../../web-guided-project-class-components/followAlong/src/components/Item';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: todo,
    }
  };

  addTodo = (e) => {
    e.preventDefault();
    console.log("clicked add todo");
    const newTodo = {
      task: this.state.input,
      id: parseInt(Math.random()*10000000000000),
      completed: false
    };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo]
    });
    console.log(this.state.todo);
  };
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };
  toggleTodo = (item) => {
    console.log('clicked todo');
    this.setState({
      ...this.state,
      todo: this.state.todo.map(todo => {
        if (todo.id === item.id) {
          return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      })
    })
    console.log(this.state.todo);
  };
  clearCompleted = () => {
    console.log('pressed clear')
    this.setState({
      ...this.state,
      todo: this.state.todo.filter(todo => {
        return (!todo.completed);
      })
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
          <div>
          <TodoList todo={this.state.todo} toggleTodo={this.toggleTodo}/>
          <TodoForm addTodo={this.addTodo} onChange={this.onChange} input={this.state.input} clearCompleted={this.clearCompleted}/>
          </div>
      </div>
    );
  };
};

export default App;
