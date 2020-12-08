import React from 'react'
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import Axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
  onSearchSubmit(searchItems){
    Axios.get(
      'https://api.unsplash.com/search/photos',
      {
        headers:{
          Authorization: 'Client-ID tY907IzLfg7VebQwLlZoMAmVcByUFNwMwCtpNG3bm2w'
        }
      }
    )
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
