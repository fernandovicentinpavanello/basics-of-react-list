import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>React Todo</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
