import React, { useEffect, useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from "react-icons/fa";
import { colRef, db } from "../firebase/config";
import { deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";

function InComplete() {
    const [todos,setTodos]=useState([])
    
    const handleDelete= async (id)=>{
      await deleteDoc(doc(db,"todos",id))
    }
    // const handleEdit= async (id)=>{
    //   await updateDoc(doc(db,"todos",id),{})
    // }
  
    useEffect(() => {
      const q=query(colRef);
      const unSub=onSnapshot(q,(QuerySnapshot)=>{
        let todosArray=[]
        QuerySnapshot.forEach((doc)=>{
          todosArray.push({...doc.data(),id:doc.id})
        })
        setTodos(todosArray)
      })
      return ()=>unSub();
    }, []);
    console.log(todos)

    return (
        <div className='todoLists'>
            {
                todos.map((todo)=>{
                    return(
                        todo &&
                        <div className="todo-container" key={todo.id}>
                            <button className="btn completed"><BsCheck2Circle /></button>
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