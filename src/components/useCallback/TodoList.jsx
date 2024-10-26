//@ts-nocheck
//child file
import React from 'react'

function TodoList({todo,removeTodo}) {
    console.log("todolist called");
    const handleRemove = index => {
        removeTodo(index);
    };
  return (
   <>
   <h1>Todo List</h1>
   
   <ul>
    {
        todo.map((td,index)=>{
            return<>
            <li key={index}>{td}
            <button onClick={()=>{handleRemove(index)}}>remove</button></li>
            
            </>

        })
    }
   </ul>
   </>
  )
}

export default React.memo(TodoList)