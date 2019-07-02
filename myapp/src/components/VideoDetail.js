// function component
import React from 'react';

const VideoDetail = ({ video }) => {
  // since when first visit video value is set to null to avoid this 
  //  we add Loading message
  if (!video) {
    return <div>Loading...</div>
  }

  // props.video ===> video destructuring es6
  return <div>{video.snippet.title}</div>
}

export default VideoDetail;