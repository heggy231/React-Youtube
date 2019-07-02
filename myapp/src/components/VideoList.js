// functional component
import React from 'react';
import VideoItem from './VideoItem';

// const VideoList = (props) => {
//   // props.videos
//   return (
//   <div>
//     {props.videos.length}
//   </div>
//   );
// }

// videos array es6 destructuring Videos properties
const VideoList = ({ videos, onVideoSelect }) => {
  // the inner function gets called one time for every obj inside the video
  // mapping over the videos array
  const renderedList = videos.map((video) => {
    // list of different video item components
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;

}

export default VideoList;