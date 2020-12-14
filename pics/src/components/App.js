import React from 'react'
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
  state = { images:[] };

  /*
  this function will make a request to the Unsplash API and return all the photos that correlate to the search term.
  it will then take the results and set it to the images state
  */
  onSearchSubmit = async searchItems => {
    const response = await unsplash.get('/search/photos',{
        params: { query: searchItems},
      });
      this.setState({images:response.data.results});
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default App;
