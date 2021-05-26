import React from 'react';

function Todo({ todo }) {
  return (
    <div style={{ display: 'flex' }}>
      <input type="checkbox" />
      <li>{todo.taks}</li>
      <button>X</button>
    </div>
  );
}
