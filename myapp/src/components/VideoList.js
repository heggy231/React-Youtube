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

// videos array
const VideoList = ({ videos }) => {
  // the inner function gets called one time for every obj inside the video
  // mapping over the videos array
  const renderedList = videos.map((video) => {
    // list of different video item components
    return <VideoItem />;
  });

  return (
  <div>
    {renderedList}
  </div>
  );
}

export default VideoList;