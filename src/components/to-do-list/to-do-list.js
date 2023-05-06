import React from "react";
import ToDoListItem from "../to-do-list-item";

import "./to-do-list.css"

const TodoList = ({
                      todos,
                      onDelete,
                      onToggleDone,
                      onToggleImportant
                  }) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <ToDoListItem {...itemProps}
                              onDelete={() => {
                                  onDelete(id)
                              }}
                              onToggleDone = {() => {
                                  onToggleDone(id)
                              }}
                              onToggleImportant = {() => {
                                  onToggleImportant(id)
                              }}
                />
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default TodoList