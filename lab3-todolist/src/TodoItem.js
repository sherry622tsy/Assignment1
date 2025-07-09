import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {todo.title}
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
