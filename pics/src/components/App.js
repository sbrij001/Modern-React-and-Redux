import React from 'react'
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
  state = { images:[] };

  onSearchSubmit = async (searchItems) => {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: searchItems},
        headers:{
          Authorization: 'Client-ID tY907IzLfg7VebQwLlZoMAmVcByUFNwMwCtpNG3bm2w'
        }
      });
      this.setState({images:response.data.results});
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App;
