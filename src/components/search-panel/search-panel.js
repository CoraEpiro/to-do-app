const SearchPanel = () => {
    const searchStyle = {fontSize: '20px'}
    const searchText = "Type here to search"
    return <input className="float-left"
        placeholder = {searchText}
        style = {searchStyle}
    />
  }

export default SearchPanel