import ToDoListItem from "../to-do-list-item"

const ToDoList = ({toDos}) => {
    const items = toDos.map((item) => {
        const {key, ...itemProps} = item
        return (
            <li key={item.key}>
                <ToDoListItem {...itemProps} />
            </li>
        )
    })

    return (
        <ul>
            {items}
        </ul>
    )
}

export default ToDoList