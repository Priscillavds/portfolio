import styles from "./TodoApp.module.css";
import TodoInput from "./TodoAppComponents/TodoInput";
import React, {useState} from "react";
import TodoList from "./TodoAppComponents/TodoList";
import { TodoItem } from "./types";

const TodoApp = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <>
            <header className={styles.header}>TodoApp</header>
            
                
            <div className={styles.container}>
                <TodoInput addTodo={addTodo}/>
                <TodoList todos={todos} markCompleted={markCompleted}/>
            </div>
             
         </>
        )
  }
  export default TodoApp;