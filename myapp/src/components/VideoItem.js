import './VideoItem.css';
import React from 'react';

// const VideoItem = (props) => {
//   return <div>Video Item</div>;
// }

// export default VideoItem;
// There are 5 separate instances of video component and each have separate video obj
const VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
        
      </div>
      
    </div>
  );
}

export default VideoItem;