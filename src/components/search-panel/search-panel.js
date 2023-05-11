import React from "react"


class SearchPanel extends React.Component{
    state = {
      term: ""
    }
    
    handleTermChange = (event) => {
        const term = event.target.value
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render()
    {
      const searchStyle = {fontSize: '20px'}
      const searchText = "Type here to search"

      return (
          <input className="float-left"
              placeholder = {searchText}
              style = {searchStyle}
              onChange={this.handleTermChange}/>
      )
    }
}
export default SearchPanel