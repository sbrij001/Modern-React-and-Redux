import React from 'react';

class SearchBar extends React.Component{
  state={searchItems: ""}

  onInputSearch = (event) => {
    this.setState({ searchItems: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchItems)
  }

  render(){
    return(
      <div className="ui segment">
        <label>Search</label>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.searchItems}
            onChange={this.onInputSearch}
          />
        </form>
      </div>
    )
  }
}
export default SearchBar;