import { useState } from "react"

export function TodoInput({ setTodo, todos }) {
    const [inputText, setInputText] = useState('');

    function createNewTodo() {
        setTodo([
            ...todos, {
                text: inputText,
                completed: false,
                id: crypto.randomUUID()
            }
        ])
        setInputText('');
    }
    return (
        <>
            <h1 className="title">Todo List</h1>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={inputText}
                    className="input"
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button className="add-button" onClick={createNewTodo}>
                    <span className="add-icon">+</span>
                </button>
            </div>
        </>
    )
}