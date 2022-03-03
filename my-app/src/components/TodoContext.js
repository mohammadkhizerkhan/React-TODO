import { createContext, useContext , useState} from "react";

const defaultValue=[]

const todoContext=createContext(defaultValue);

const TodoProvider=({children})=>{
    const [input,setInput]=useState("");
    const [todos,setTodos]=useState([]);
    const changeHandler=(e)=>{{
        setInput(e.target.value)
        console.log(input)
    }}
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodos((prev)=>[...prev,input])
        setInput("")
        console.log(todos)
    }

    return(
        <>
        <todoContext.Provider value={{input,todos,changeHandler,handleSubmit}}>
            {children}
        </todoContext.Provider>
        </>
    )
}

const useTodos=()=>useContext(todoContext)
export {useTodos,TodoProvider}