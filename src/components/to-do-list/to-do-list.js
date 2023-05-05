import ToDoListItem from "../to-do-list-item"
import { ToDoData } from "../to-do-app/app";
import "./to-do-list.css"
import React from "react";
class ToDoList extends React.Component{
    state = {
        active: true
    }

    items = ToDoData.map((item) => {
        const {key, ...itemProps} = item
        return (
            <li key={item.key} className="list-group-item">
                <ToDoListItem {...itemProps}/>
            </li>
        )
    })

    render() {
        const active = this.state
        if(active)
        {
            return (
                <ul className="list-group todo-list">
                    {this.items}
                </ul>
            )
        }

    }

}

export default ToDoList