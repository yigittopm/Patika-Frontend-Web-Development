import '../../app.css'

import SearchTodo from './SearchTodo'
import InputTodos from './InputTodos'
import { useState } from 'react'

const defaultList = [
    {
        text: "30 days of Javascript",
        completed: true
    },
    {
        text: "Live your life",
        completed: false
    }
]

function Todo() {

    const [todoList, setTodoList] = useState(defaultList)

    return (
        <div className='todos-container'>
            <h2 className='title'>todos</h2>
            <SearchTodo setTodoList={setTodoList} todoList={todoList} />
            <InputTodos setTodoList={setTodoList} todoList={todoList} />
        </div>
    )
}

export default Todo