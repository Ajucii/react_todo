
import { useState, useEffect } from "react";


function FormTodo({ addTodo }) {
    const [todo, setTodo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo === "") {
            return;
        }
        addTodo(todo);
        setTodo("");
    }


    useEffect(() => {
        window.localStorage.setItem("todoInLocal", JSON.stringify(todo))
    })



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                placeholder="오늘 할 일을 입력하세요."
            ></input>
            <button type="submit">등록</button>
        </form>
    )
}


export default FormTodo;