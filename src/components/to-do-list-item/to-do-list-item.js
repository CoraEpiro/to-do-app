import React from "react";
import "./to-do-list-item.css"
import { ToDoData } from "../to-do-app/app.js"
import ReactDOM from "react-dom";
import AppBlocks from "../combined-app-blocks";
class ToDoListItem extends React.Component{
    state = {
        done: false,
        important: false
    }
    onItemClick = () => {
        //console.log(`Done ${this.props.text}`)
        this.setState(({done}) => {
            return{
                done: !done
            }
        })
    }
    onMarkImportant = () => {
        this.setState(({important}) => {
            return{
                important: !important
            }
        })
    }
    onItemDelete = () => {
        const itemToDelete = this.props.valueOf()
        const index = ToDoData.findIndex(item => item.text === itemToDelete.text)
        ToDoData.splice(index, 1)
        ReactDOM.render(<AppBlocks ToDoData={ToDoData} />, document.getElementById('root'))
    }
    render() {
        const {text,} = this.props
        const {done, important} = this.state
        let classNames = "todo-list-item"
        if (done) {
            classNames += " done"
        }

        if (important) {
            classNames += " important"
        }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                      onClick={this.onItemClick}>
                    {text}
                </span>
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={this.onMarkImportant}>
                    <i className="fa fa-check"/>
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={this.onItemDelete}>
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        )
    }
}
export default ToDoListItem