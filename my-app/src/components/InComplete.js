import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

function InComplete() {
    return (
        <div className='todoLists'>
            <div className="todo-container">
                <button className="btn completed"><BsCheck2Circle /></button>
                <p className="todo-msg">meeting at 9am</p>
                <button className="btn delete"><RiDeleteBin6Line/></button>
            </div>
        </div>
    )
}

export default InComplete