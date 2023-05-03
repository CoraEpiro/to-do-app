import ToDoListItem from "../to-do-list-item"

import "./to-do-list.css"
const ToDoList = ({toDos}) => {
    const items = toDos.map((item) => {
        const {key, ...itemProps} = item
        return (
            <li key={item.key} className="list-group-item">
                <ToDoListItem {...itemProps} />
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            {items}
        </ul>
    )
}

export default ToDoList