import React, { useReducer, useState } from 'react'
import { act } from 'react-dom/test-utils'
const reducerFunction = (state,action) =>{

    switch(action.type){
        case "Increment_age":
        return{
            name:"supraja",
            age:state.age+10
        }
        case "Decrement_age":
            return{
                name:"sruthi",
                age:state.age-5
            }
        case "Change_name":
            return{
                name:action.updatedName,
                age:state.age
            }
            default:
                return state
    }
}
const UseReducer = () =>{
    const initialstate={name:"supraja",age:21}
    const [name,setName]=useState("")
    const[currentstate,dispatch]=useReducer(reducerFunction,initialstate)
    const increment = () => {
        dispatch({type:"Increment_age"})
    }
    const decrement = () => {
        dispatch({type:"Decrement_age"})
    }
    const changeName = () => {
        dispatch({
            type:"Change_name",
            updatedName:name
        })
    }
  return (
    <>
    <h3>{currentstate.name}</h3>
    <h3>{currentstate.age}</h3>
    <input value={name} onChange={(event)=>setName(event.target.value)}/>
    <button onClick={increment}>increment the age</button><br></br>
    <button onClick={decrement}>Decrement the age</button>
    <button onClick={changeName}>Change name</button>
    </>
  )
}

export default UseReducer