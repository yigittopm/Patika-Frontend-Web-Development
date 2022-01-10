import '../../app.css'

import { useState } from 'react'

function InputTodos({todoList, setTodoList}) {

    const [todoText, setTodoText] = useState('')

    const createTodo = (e) => {
        e.preventDefault()

        if(todoText !== '') {
            setTodoList([...todoList, {
                text: todoText,
                completed: false
            }])
        }
        setTodoText('')
    }

    return (
        <form onSubmit={createTodo} className='form-group'>
            <input
                className={ todoText !== '' && 'create-input'}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder=' Create a new Todo'/>
            {
                todoText !== '' ? <button className='create-button'>+</button> : null
            }
        </form>
    )
}

export default InputTodos
