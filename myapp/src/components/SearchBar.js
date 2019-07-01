import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'dfd343434fgfgf' };

  onInputChange = () => {

  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search HERE</label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar; 