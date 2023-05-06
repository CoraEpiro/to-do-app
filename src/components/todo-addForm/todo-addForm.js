import React from "react";

class ToDoAddForm extends React.Component{

    state = {
        newTodo: '',
    };
    handleInputChange = (event) => {
        this.setState({
            newTodo: event.target.value,
        });
    }

    render() {
        const {onAdd} = this.props
        const handleSubmit = (e) => {
            e.preventDefault();
            if(this.state.newTodo.trim() !== "")
            {
                onAdd(this.state.newTodo)
                this.state.newTodo = ""
            }
        };

        const inputStyle = {fontSize: '20px'}
        const inputText = "Add a new ToDo"

        return(
            <form className="top-panel d-flex"
                  onSubmit={handleSubmit}>
                <input type="text"
                       style={inputStyle}
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