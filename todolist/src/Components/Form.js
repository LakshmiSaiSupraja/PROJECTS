import React from 'react'
import style from '../Components/style.css';
const Form = ({ input, setInput, todos, setTodos }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, { id: Math.random(), title: input, completed: false }]);
        setInput("");
    };
    return (
        <>
        <div className='card-container'>
            <form onSubmit={onFormSubmit} >
                <input
                type='text'
                    placeholder='enter a Todo...'
                    className='task-input'
                    value={input}
                    required
                onChange={onInputChange}
                />
                <button className='button-add' type='submit'>Add Todo</button>
            </form>
            
            </div>

        </>

    )
}

export default Form;