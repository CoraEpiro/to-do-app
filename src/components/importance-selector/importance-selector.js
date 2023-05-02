const Selector = () => {
    const selectorStyle = {fontSize: '20px'}
    return <select name="importanceSelector" id="importanceSelector">
        <option value="true">True</option>
        <option value="false" selected>False</option>
    </select>
}

export default Selector