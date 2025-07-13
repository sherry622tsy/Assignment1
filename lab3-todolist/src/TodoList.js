import React, { useEffect, useState } from 'react'; 
// Import React and React hooks: useState for state, useEffect for side effects

import { fetchTodos } from './api'; 
// Import a function to fetch todo data (presumably from a mock API or server)

import TodoItem from './TodoItem'; 
// Import the TodoItem component to render individual todo items

function TodoList() {
  const [todos, setTodos] = useState([]); 
  // Initialize state to hold the list of todo items

  useEffect(() => {
    // Fetch todos when the component mounts
    fetchTodos()
      .then((res) => setTodos(res.data)) // Set the todos using data from API response
      .catch((err) => console.error('Error fetching todos:', err)); // Log errors if any
  }, []); // Empty dependency array means this runs only once on mount

  const toggleComplete = (id) => {
    // Toggle the 'completed' state of a specific todo by id
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    // Remove the todo with the matching id
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    // Prompt the user to enter a new todo task
    const newTodo = {
      id: Date.now(), // Generate a unique id using current timestamp
      title: prompt('Enter new todo'), // Ask user for todo title
      completed: false,
    };
    if (newTodo.title) {
      // Only add if title is not empty
      setTodos([newTodo, ...todos]); // Add the new todo to the beginning of the list
    }
  };

  return (
    <div>
      <h2>Todo List</h2> {/* Title for the todo list section */}
      <button onClick={addTodo}>+ Add Task</button> {/* Button to add new todo */}
      <ul>
        {/* Map over todos and render each one using the TodoItem component */}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id} // Unique key for each list item
            todo={todo} // Pass the todo item object
            toggleComplete={toggleComplete} // Pass the toggle function
            deleteTodo={deleteTodo} // Pass the delete function
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList; 
// Export the TodoList component to be used in App.js
