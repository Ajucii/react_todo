



function Todo({ todo, index, removeTodo }) {

    return (
        <div className="todo">
            <span>{todo.text}</span>
            <div>
                <button onClick={() => removeTodo(index)}>❌</button>
            </div>
        </div>
    )
}

export default Todo;