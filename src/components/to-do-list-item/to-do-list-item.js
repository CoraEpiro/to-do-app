import React from "react";
import "./to-do-list-item.css"
const ToDoListItem = ({
                          text,
                          important,
                          done,
                          onDelete,
                          onToggleDone,
                          onToggleImportant
                      }) => {
    let classNames = "todo-list-item"
    if (done) {
        classNames += " done"
    }

    if (important) {
        classNames += " important"
    }

    return (
        <span className={classNames}>
            <span className="todo-list-item-label"
                  onClick={onToggleDone}>
                {text}
            </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>
                <i className="fa fa-check"/>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDelete}>
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    )
}
export default ToDoListItem