import React, { useEffect, useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from "react-icons/fa";
import { useTodos } from './TodoContext';
import {handleComplete,handleDelete} from "../services/todoServices"

function InComplete() {
    const {todos}=useTodos();
    return (
        <div className='todoLists'>
            {
                todos.map((todo)=>{
                    return(
                        todo.isComplete ||
                        <div className="todo-container" key={todo.id}>
                            <button className="btn completed" onClick={()=>handleComplete(todo)}><BsCheck2Circle /></button>
                            <p className="todo-msg">{todo.todo}</p>
                            {/* <button className="btn edit" onClick={()=>handleEdit(todo.id)}><FaEdit/></button> */}
                            <button className="btn delete" onClick={()=>handleDelete(todo.id)}><RiDeleteBin6Line/></button>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default InComplete