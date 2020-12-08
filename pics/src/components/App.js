import React from 'react'
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
  async onSearchSubmit(searchItems){
    const response = await axios.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: searchItems},
        headers:{
          Authorization: 'Client-ID tY907IzLfg7VebQwLlZoMAmVcByUFNwMwCtpNG3bm2w'
        }
      });
      console.log(response.data.results);
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
