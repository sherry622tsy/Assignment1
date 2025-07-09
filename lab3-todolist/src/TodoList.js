import React, { useEffect, useState } from 'react';
import { fetchTodos } from './api';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos()
      .then((res) => setTodos(res.data))
      .catch((err) => console.error('Error fetching todos:', err));
  }, []);

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: prompt('Enter new todo'),
      completed: false,
    };
    if (newTodo.title) {
      setTodos([newTodo, ...todos]);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={addTodo}>+ Add Task</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
