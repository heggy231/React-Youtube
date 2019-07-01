import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = {
    // once user search for videos -> we will update this array
    //  with request array: `response.data.items`
    videos: []
  };
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
    // console.log(response);

    // response.data.items is an array of obj request obj returns when user search for videos
      this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        I have {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;