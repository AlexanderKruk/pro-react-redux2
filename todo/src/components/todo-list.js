import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {

  const elements = todos.map((e) => {
    return (
      <li>
        <TodoListItem { ...e }/>
      </li>
    );
  })

  return (    
  <ul>
    { elements }
  </ul>
  );
};

export default TodoList;