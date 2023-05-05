import React from "react";
import './item-status-filter.css'
import {ToDoData} from "../to-do-app/app";

class ItemStatusFilter extends React.Component{
    onShowActive = () => {
        for (let i = 0; i < ToDoData.length; i++)
        {
            document.getElementsByClassName("list-group-item").item(i).classList.remove("hideActives")
        }
    }

    onShowDone = () => {
        for (let i = 0; i < ToDoData.length; i++)
        {
            document.getElementsByClassName("list-group-item").item(i).className += " hideActives"
        }
    }

    render() {
        return (
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-info">
                        All
                </button>
                <button
                    onClick={this.onShowActive}
                    type="button"
                    className="btn btn-secondary">
                        Active
                </button>
                <button
                    onClick={this.onShowDone}
                    type="button"
                    className="btn btn-secondary">
                        Done
                </button>
            </div>
        )
    }
}


// const ItemStatusFilter = () => {
//     return (
//         <div className="btn-group">
//             <button
//                 type="button"
//                 className="btn btn-info">
//                     All
//             </button>
//             <button
//                 type="button"
//                 className="btn btn-secondary">
//                     Active
//             </button>
//             <button
//                 type="button"
//                 className="btn btn-secondary">
//                     Done
//             </button>
//         </div>
//     )
// }

export default ItemStatusFilter