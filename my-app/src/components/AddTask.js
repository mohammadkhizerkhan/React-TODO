import React, { useState } from 'react'
import {useTodos} from "./TodoContext"

function AddTask() {
    const {input,changeHandler,handleSubmit} =useTodos();
    return (
        <div className='AddTask'>
            <form action="" className='form'>
                <input type="text" className='input' value={input} onChange={changeHandler}/>
                <button className="btn addBtn" onClick={(e)=>handleSubmit(e)}>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask
