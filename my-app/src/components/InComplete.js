import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {useTodos} from "./TodoContext"
function InComplete() {
    const {todos} =useTodos();
    return (
        <div className='todoLists'>
            {
                todos.map((todo)=>{
                    return(
                        todo &&
                        <div className="todo-container">
                            <button className="btn completed"><BsCheck2Circle /></button>
                            <p className="todo-msg">{todo}</p>
                            <button className="btn delete"><RiDeleteBin6Line/></button>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default InComplete