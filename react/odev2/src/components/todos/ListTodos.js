import '../../app.css'

function ListTodos({filteredList, setTodoList}) {

    const deleteItem = (event, item) => {
        const deletedList = filteredList.filter((todo) => todo !== item)
        console.log(deleteItem)
    }

    const completedItem = (e, item) => {
        e.preventDefault()
        console.log(item)
    }

    return (
        <ul className='list-ul'>
            {filteredList.map((item, index) => (
                <li className={item.completed ? 'list-li completed-li' : 'list-li'}
                    onClick={e => completedItem(e, item)}
                    key={index}>
                        {item.text} 
                        <span 
                            onClick={event => deleteItem(event, item)} 
                            className='delete-li'>
                                x
                            </span>
                </li>
            ))}
        </ul>
    )
}

export default ListTodos
