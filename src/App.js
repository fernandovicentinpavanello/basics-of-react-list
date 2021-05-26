import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function AddTodo(todo) {
    setTodo([todo, ...todos]);
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
