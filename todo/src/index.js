import React from 'react';
import ReactDOM from 'react-dom';

// JSX -> Babel -> Clean JS
const el = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder='search'></input>
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);
// Clean JS, light object
// const el = React.createElement('h1', null, 'Hello World!');

ReactDOM.render(el, document.getElementById('root'));
