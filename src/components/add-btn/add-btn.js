import React from "react";
import ReactDOM from 'react-dom';
import ToDoData from "../to-do-app/app.js"
import App from "../to-do-app"

const ToDoAdd = () => {
    return <button
        onClick={addNewItem}
            type="button"
            className="btn btn-info">
            Add
    </button>
}
function addNewItem() {
    const newItem = document.getElementById("newToDo");
    newItem.important = document.getElementById("importanceSelector").Value
    ToDoData.push(newItem)
    ReactDOM.render(<App />, document.getElementById('root'));
}

export default ToDoAdd
