import React, { useState } from 'react'
import Header from "../Components/Headers"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form  from './Form';
import Todo from "../Components/Todo"
import style from "../Components/style.css";
const TodoList =() => {
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);
 return (
    <>
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          />
          </div>
          <div>
            <Todo todos={todos} setTodos={setTodos}/>
          </div>
      </div>
    </div>
    </>
  )
}

export default TodoList;