import React from 'react'; 
// Import React to use JSX and define a component

import './App.css'; 
// Import the CSS file for styling the App component

import TodoList from './TodoList'; 
// Import the TodoList component which will handle the todo functionality

function App() {
  return (
    <div className="App"> {/* Root container with a class name for styling */}
      <h1>Lab 3 – React Todo App</h1> {/* App title heading */}
      <TodoList /> {/* Render the TodoList component here */}
    </div>
  );
}

export default App; 
// Export the App component as the default export so it can be rendered by index.js
