import React from 'react'; 
// Import React to define a functional component

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  // Destructure props: 'todo' (an object), 'toggleComplete' (function), and 'deleteTodo' (function)

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {/* Display todo item with a line-through if it's marked as completed */}
      
      <input
        type="checkbox"
        checked={todo.completed} // Checkbox reflects the completed state
        onChange={() => toggleComplete(todo.id)} // Call toggleComplete with the todo's id when clicked
      />

      {todo.title} {/* Display the title of the todo item */}

      <button onClick={() => deleteTodo(todo.id)}>❌</button>
      {/* Delete button that calls deleteTodo with the todo's id when clicked */}
    </li>
  );
}

export default TodoItem; 
// Export the TodoItem component for use in other components like TodoList
