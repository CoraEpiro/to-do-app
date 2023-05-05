import "./app.css"
import AppBlocks from "../combined-app-blocks";


let id = 0
export const ToDoData =
    [
        {text: "Wake Up", important: false, key:++id},
        {text: "Have Breakfast", important: true, key:++id},
        {text: "Work on Project", important: false, key:++id},
    ]
const App = () => {
  return (
    <AppBlocks />
  )
}

export default App