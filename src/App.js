import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>React Todo</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} />
      </header>
    </div>
  );
}

export default App;
