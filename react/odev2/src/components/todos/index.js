import '../../app.css'

import SearchBar from './SearchTodo'
import ListTodos from './ListTodos'
import InputTodos from './InputTodos'

function Todo() {
    return (
        <div className='todos-container'>
            <h2>Todos</h2>
            <SearchBar />
            <ListTodos />
            <InputTodos />
        </div>
    )
}

export default Todo