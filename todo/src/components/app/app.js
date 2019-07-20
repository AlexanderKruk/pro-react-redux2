import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((e) => e.id === id);
      
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) =>{
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "important") }
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") }
    });
  };

  addItem = (text) => {
    this.setState(({ todoData }) => {
      const newItem = [...todoData, this.createTodoItem(text)];
      return { todoData : newItem };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((e) => e.id === id);

      const newArray = [...todoData.slice(0, idx),
                        ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      }
    });
  };

  render() {

    const { todoData } = this.state;
    const doneCount = todoData
                      .filter((e) => e.done).length;
    const todoCount = todoData
                      .filter((e) => !e.done).length;

    return(
    <div className="todo-app">
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList 
        todos = { todoData }
        onDeleted = { this.deleteItem }
        onToggleImportant = { this.onToggleImportant }
        onToggleDone = { this.onToggleDone } />
      <ItemAddForm onAddItem = { this.addItem } />
  </div>
  )};
}