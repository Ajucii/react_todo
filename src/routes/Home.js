import Todo from "../components/Todo";
import FormTodo from "../components/FormTodo";
import React from "react";
import "./Home.css"
import { useState, useEffect } from "react";

function Home() {

    const [todos, setTodos] = useState(() => {

        if (typeof window !== "undefined") {

            const saved = window.localStorage.getItem("todos");
            if (saved !== null) {
                return JSON.parse(saved);
            } else {
                return [{
                    text: "This is a sample todo"
                }];
            }
        }
    });




    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    }



    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }


    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    }, [todos])



    return (
        <div className="app">

            <div className="container">
                <h1>Todo List</h1>
                <FormTodo addTodo={addTodo} />

                <div>
                    {todos.map((todo, index) => (
                        <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            removeTodo={removeTodo}
                        />
                    ))}
                </div>
            </div>
        </div >
    );

}

export default Home;