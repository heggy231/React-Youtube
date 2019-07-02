import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    // once user search for videos -> we will update this array
    //  with request array: `response.data.items`
    videos: [],
    selectedVideo: null
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

    // `response.data.items` => an array of obj request obj returns when user search for videos
    this.setState({ videos: response.data.items }
    );
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          {/* group item inside row so it doesn't get break down into separate line */}
          <div className="ui row">
            {/* 16 total wide column */}
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;