import React from "react"
import ReactDOM from 'react-dom'

const ToDoAdd = () => {
    return <button
        onClick={addNewItem}
            type="button"
            className="btn btn-info">
            Add
    </button>
}

 function addNewItem() {
//     const newItem = document.getElementById("newToDo").value
//     const importance = document.getElementById("importanceSelector").value === "true"
//     ToDoData.push({text: newItem, important: importance, key:ToDoData.length + 1})
//
//     ReactDOM.render(<AppBlocks toDos={ToDoData} />, document.getElementById('root'))
}
export default ToDoAdd