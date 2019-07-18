import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const todoData = [
  { label: 'Drink Coffee', important: false, id: 1 },
  { label: 'Make Awesome App', important: true, id: 2 },
  { label: 'Have a lunch', important: false, id: 3 }
]

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos = { todoData } />
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
