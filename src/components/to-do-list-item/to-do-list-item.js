const ToDoListItem = ({ text, important = false }) => {
    const itemStyle = {
        color: important ? "red" : "black"
    }

    return <span style={itemStyle}>{text}</span>
}

export default ToDoListItem