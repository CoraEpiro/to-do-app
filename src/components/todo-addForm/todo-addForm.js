import React from "react";

import "./todo-addForm.css"

class ToDoAddForm extends React.Component{

    state = {
        newTodo: '',
    };

    handleInputChange = (event) => {
        this.setState({
            newTodo: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.newTodo.trim() !== "")    
        {
            this.props.onAdd(this.state.newTodo)
            this.setState({
                newTodo: ""
            })
        }
    };

    render() {
        const inputText = "Add a new ToDo"

        return(
            <form className="item-add-form d-flex"
                  onSubmit={this.handleSubmit}>
                <input type="text"
                       className="form-control"
                       placeholder={inputText}
                       value={this.state.newTodo}
                       onChange={this.handleInputChange} />
                <button
                    type="submit"
                    className="btn btn-info btn-group">
                    Add
                </button>
            </form>
        )
    }
}
export default ToDoAddForm