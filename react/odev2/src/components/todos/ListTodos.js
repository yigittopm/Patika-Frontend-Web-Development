function ListTodos({filteredList}) {
    return (
        <ul>
            {filteredList.map((item, index) => (
                <li key={index}>{item.text}</li>
            ))}
        </ul>
    )
}

export default ListTodos
