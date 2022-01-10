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
        <form onSubmit={createTodo}>
            <input 
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder='Create a new Todo'/>
            <button>New Todo</button>
        </form>
    )
}

export default InputTodos
