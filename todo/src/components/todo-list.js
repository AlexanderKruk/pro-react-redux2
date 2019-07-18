import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {

  const elements = todos.map((e) => {

    const { id, ...itemProps } = e; 

    return (
      <li key={ id }>
        <TodoListItem { ...itemProps }/>
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