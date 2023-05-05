import ToDoListItem from "../to-do-list-item"
import "./to-do-list.css"
import React from "react";
const ToDoList = ({
                    todos,
                    onDelete
                  }) => {

    const items = todos.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <ToDoListItem {...itemProps}
                            onDelete={()=> {
                                onDelete(id)
                            }}
                            onToggleDone={()=> {
                                onToggleDone(id)
                            }}
                            onToggleImportant={()=> {
                                onToggleImportant(id)
                            }}

                />
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