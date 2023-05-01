import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import SearchPanel from "../search-panel";
import ToDoList from "../to-do-list";

import "./app.css"

const App = () => {
    let id = 0
    const ToDoData =
    [
        {text: "Wake Up", important: false, key:++id},
        {text: "Have Breakfast", important: true, key:++id},
        {text: "Work on Project", important: false, key:++id},
    ]
  return (
    <div className="todo-app">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList toDos = {ToDoData}/>
    </div>
  )
}

export default App