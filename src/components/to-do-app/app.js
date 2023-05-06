import "./app.css"
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ToDoList from "../to-do-list";
import InputPanel from "../add-app-input-panel";
import ImportanceSelector from "../importance-selector";
import AddBtn from "../add-btn";
import React from "react";

class App extends React.Component{
    idSeeder = 0
    state = {
        toDoData :
        [
            this.createItem("Wake Up!"),
            this.createItem("Have Breakfast"),
            this.createItem("Work on Project")
        ]
    }

    createItem(text) {
        return{
            text,
            important: false,
            done: false,
            id: ++this.idSeeder
        }
    }
    deleteItem = (id) => {
        this.setState(({toDoData}) => {
            const idx = toDoData.findIndex((del) => del.id === id)
            const newArray = [
                ...toDoData.slice(0, idx),
                ...toDoData.slice(idx + 1)
            ]
            return {
                toDoData: newArray
            }
        })
    }

    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((prop) => prop.id === id)
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        return {
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        }
    }
    onToggleImportant = (id) =>{
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, "important")
            }
        })
    }
    onToggleDone = (id) =>{
        this.setState(({toDoData}) => {
            return {
                toDoData: this.toggleProperty(toDoData, id, "done")
            }
        })
    }
    render() {
        return(
            <div className="todo-app">
                <AppHeader todo={1} done={2}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <ToDoList todos={this.state.toDoData}
                          onDelete={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <div className="top-panel d-flex">
                    <InputPanel/>
                    <ImportanceSelector/>
                    <AddBtn/>
                </div>
            </div>
        )
    }
}
export default App