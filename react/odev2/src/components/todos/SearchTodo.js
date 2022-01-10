import '../../app.css'

import { useState } from 'react'

import ListTodos from './ListTodos'

function SearchTodo({todoList, setTodoList}) {

    const [filteredText, setFilteredText] = useState('');

    const filterList = todoList.filter((item) => {
        return Object.keys(item).some((key) => (
            item[key]
                .toString()
                .toLowerCase()
                .includes(filteredText.toString().toLowerCase())
        ))
    })

    return (
        <div>
            <input 
                onChange={(e) => setFilteredText(e.target.value)} 
                value={filteredText} 
                placeholder=" Search Todo"/>
            <ListTodos setTodoList={setTodoList} filteredList={filterList}/>
        </div>
    )
}

export default SearchTodo
