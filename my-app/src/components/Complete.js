import React, { useEffect } from "react";
import { IoReload } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTodos } from "./TodoContext";
import {handleComplete,handleDelete} from "../services/todoServices"

function Complete() {
  const { todos } = useTodos();
  return (
    <div className="todoLists">
      {todos.map((todo) => {
        return (
          todo.isComplete && (
            <div className="todo-container" key={todo.id}>
              <button className="btn completed" onClick={()=>handleComplete(todo)}> 
                <IoReload />
              </button>
              <p className="todo-msg">{todo.todo}</p>
              <button className="btn delete" onClick={()=>handleDelete(todo.id)}>
                <RiDeleteBin6Line />
              </button>
            </div>
          )
        );
      })}
    </div>
  );
}

export default Complete;
// IoReload
