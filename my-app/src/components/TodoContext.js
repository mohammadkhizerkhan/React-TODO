import { createContext, useContext , useState} from "react";
import { colRef } from "../firebase/config";
import { addDoc } from "firebase/firestore";

const defaultValue=[]

const todoContext=createContext(defaultValue);

const TodoProvider=({children})=>{
    const [input,setInput]=useState("");

    
    const changeHandler=(e)=>{{
        setInput(e.target.value)
    }}

    const handleSubmit=(e)=>{
        e.preventDefault();
        addDoc(colRef,{
            todo:input
        })
        setInput("")
    }

    return(
        <>
        <todoContext.Provider value={{input,changeHandler,handleSubmit}}>
            {children}
        </todoContext.Provider>
        </>
    )
}

const useTodos=()=>useContext(todoContext)
export {useTodos,TodoProvider}