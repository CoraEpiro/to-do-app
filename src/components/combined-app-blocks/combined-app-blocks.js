import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ToDoList from "../to-do-list";
import { ToDoData }  from "../to-do-app/app";
import InputPanel from "../add-app-input-panel";
import ImportanceSelector from "../importance-selector";
import AddBtn from "../add-btn";
import React from "react";
import "./combined-app-blocks.css"
const AppBlocks = () => {
    return (
        <div className="todo-app">
            <AppHeader todo={1} done={2}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <ToDoList toDos={ToDoData}/>
            <div className="top-panel d-flex">
                <InputPanel/>
                <ImportanceSelector/>
                <AddBtn/>
            </div>
        </div>
    )
}

export default AppBlocks