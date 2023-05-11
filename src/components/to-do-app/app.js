import "./app.css"
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ToDoList from "../to-do-list";
import React from "react";
import ToDoAddForm from "../todo-addForm";

class App extends React.Component{
    idSeeder = 0
    state = {
        toDoData :
        [
            this.createItem("Wake Up!"),
            this.createItem("Have Breakfast"),
            this.createItem("Work on Project")
            
        ],
        term: "",
        filter: "all"
    }

    createItem(text) {
        return{
            text: text,
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
    addItem = (newTodo) => {
        this.setState(({toDoData}) => {
            const newArray = [
                this.createItem(newTodo),
                ...toDoData
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

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
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
    
    onSearchChange = (term) => {
        this.setState({term})
    }
    
    searchTodos(toDos, term) {
        if(term.length === 0)
            return toDos
        
        return toDos.filter((item) => item.text.toLowerCase().includes(term.toLowerCase()))
    }

    onFilterChange = (filter)=>{
        this.setState({filter})
    }

    filterStatus(toDos, filter) {
        switch (filter){
            case "all":
                return toDos
            case "active":
                return toDos.filter(toDo => !toDo.done)
            case "done":
                return toDos.filter(toDo => toDo.done)
            default:
                return toDos
        }
    }

    render() {
        const {toDoData, term, filter} = this.state;
        const searchedTodos = this.filterStatus(this.searchTodos(toDoData, term), filter);
        const doneCount = toDoData.filter(item => item.done).length;
        const moreCount = toDoData.length - doneCount

        return(
            <div className="todo-app">
                <AppHeader done={doneCount} todo={moreCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>
                <ToDoList todos={searchedTodos}
                          onDelete={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ToDoAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}
export default App