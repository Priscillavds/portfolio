import React from "react";
import { TodoItem } from "../types";
import TodoListItem from "./TodoListItem"

interface TodoListProps {
    todos: TodoItem[];
    markCompleted: (index: number, completed: boolean) => void;
  }

  const TodoList = ({todos, markCompleted}: TodoListProps) => {
    return (
    <div>
      {todos.map((todo, index) => (
          <TodoListItem todo={todo} markCompleted={(Completed: boolean) => markCompleted(index, Completed)}/>
      ))}
    </div>
    )
  }

  export default TodoList;