//@ts-nocheck
//main file
import React, { useCallback,useState } from 'react'
import TodoList from './TodoList';

function Todo() {
    let [todo,setTodo]=useState([]);
    let [input,setInput]=useState("")

    const addTodo=useCallback(()=>{
        console.log("addtodo");
        setTodo((preTodo)=>[...preTodo,input])
        setInput("")
    },[input]);
    const removeTodo=useCallback((index)=>{
        setTodo((preTodo)=>preTodo.filter((todo,i)=>i!==index))

    },[]);



  return (
    <>
    
    <input type="text" placeholder='write your wish'  value={input} onChange={(e)=>setInput(e.target.value)} />
    <button onClick={addTodo}>add</button>
    <TodoList todo={todo} removeTodo={removeTodo} />



    
    </>
  )
}

export default Todo