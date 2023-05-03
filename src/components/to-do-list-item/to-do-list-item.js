import React from "react";
import "./to-do-list-item.css"

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

    }
    render() {
        const {text, } = this.props
        const {done,important} = this.state
        let classNames = "todo-list-item"
        if(done){
            classNames += " done"
        }
        if(important){
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