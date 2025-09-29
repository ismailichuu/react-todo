export function TodoList({ todo, setTodo, todos }) {

    function toggleTodo(id) {
        setTodo(todos.map(todo => 
            (
                todo.id === id ?
                    {
                        ...todo,
                        completed: !todo.completed,
                    }
                    : todo
            )
        ))
    }

    function deleteTodo(id){
        setTodo(todos.filter(todo => todo.id !== id));
    }

    return (
        <div key={todo.id} className="todo-item">
            <div className="todo-content">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="checkbox"
                />
                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
            >
                ×
            </button>
        </div>
    )
}