const InputPanel = () => {
    const inputStyle = {fontSize: '20px'}
    const inputText = "Add a new ToDo"
    return <input id="newToDo"
        placeholder = {inputText}
        style = {inputStyle}
    />
}

export default InputPanel