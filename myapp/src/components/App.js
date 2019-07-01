import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  // user's search string: term
  // axios is async
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        // q is from youtube documentation
        // https://developers.google.com/youtube/v3/docs/search/list?apix=true
        q:term
      }
    });
    // view the async response obj
    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    );
  }
}

export default App;