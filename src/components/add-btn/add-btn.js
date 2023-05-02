import React from "react";
import ReactDOM from 'react-dom';
import { ToDoData } from "../to-do-app/app.js"
import AppBlocks from "../combined-app-blocks";

const ToDoAdd = () => {
    return <button
        onClick={addNewItem}
            type="button"
            className="btn btn-info">
            Add
    </button>
}

function addNewItem() {
    const newItem = document.getElementById("newToDo").value;
    const importance = document.getElementById("importanceSelector").value === "true";
    ToDoData.push({text: newItem, important: importance, key:ToDoData.length + 1});
    forceUpdate();
}
const forceUpdate = () => {
    ReactDOM.render(
        <React.StrictMode>
            <AppBlocks todoData={ToDoData} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
export default ToDoAdd