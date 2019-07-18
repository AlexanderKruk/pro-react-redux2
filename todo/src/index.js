import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  return (    
  <ul>
    <li>Learn React</li>
    <li>Build Awesome App</li>
  </ul>);
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder='search'></input>;
}

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
  </div>
  );
}

// JSX -> Babel -> Clean JS
// const el = <App/>;
// Clean JS, light object
// const el = React.createElement('h1', null, 'Hello World!');

ReactDOM.render(<App />, document.getElementById('root'));
