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
    // const onItemClick = () => {
    //     //console.log(`Done ${this.props.text}`)
    //     this.setState(({done}) => {
    //         return{
    //             done: !done
    //         }
    //     })
    // }
    // const onMarkImportant = () => {
    //     this.setState(({important}) => {
    //         return{
    //             important: !important
    //         }
    //     })
    // }
    // onItemDelete = () => {
    //     const itemToDelete = this.props.valueOf()
    //     console.log(itemToDelete)
    //     const index = ToDoData.findIndex(item => item.text === itemToDelete.text)
    //     console.log(index)
    //     ToDoData.splice(index, 1)
    //     ReactDOM.render(<AppBlocks toDos={ToDoData} />, document.getElementById('root'))
    // }

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