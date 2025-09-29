import { useState } from 'react'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList';
import './App.css'

function App() {
  const [todos, setTodo] = useState([
    {
      text: 'hello this is for checking',
      completed: false,
      id: 1
    }
  ]);

  return (
    <div className="container">
      <div className="todo-card">
        <TodoInput setTodo={setTodo} todos={todos}/>

         <div className="stats">
          <span className="stats-text">
            Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}
          </span>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-state">
              <p className="empty-text">No tasks yet. Add one to get started!</p>
            </div>
          ) : (
            todos.map(todo => (
              <TodoList todo={todo} key={todo.id} setTodo={setTodo} todos={todos}/>
            ))
          )}
          </div>
        </div>
      </div>
      )
}

      export default App
