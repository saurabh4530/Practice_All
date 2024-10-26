//@ts-nocheck
import React, { useReducer, useState } from "react";

const initialState = { todos: [] };
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "REMOVE_TODO":
      return { todos:state.todos.filter((todo,index)=>index !== action.payload)};
    default:
      return state;
  }
}

function Todolist() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("")
  };
  const removeTodo = (index) => {
    dispatch({ type: "REMOVE_TODO", payload:index });
  };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todo}
        placeholder="write a task "
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {
            state.todos.map((todo,index)=>{
                return <li key={index}>{todo} 
                <button onClick={()=>removeTodo(index)}>remove</button>
                </li>
            })
        }

      </ul>
    </>
  );
}

export default Todolist;
