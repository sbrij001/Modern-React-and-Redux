import { render } from '@testing-library/react';
import React from 'react'
import ReactDom from 'react-dom';
import SearchBar from './SearchBar';

class App extends React.Component{
  onSearchSubmit(term){
    console.log(term);
  }
  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App;
