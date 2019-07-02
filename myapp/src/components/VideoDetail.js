// function component
import React from 'react';

const VideoDetail = ({ video }) => {
  // since when first visit video value is set to null to avoid this 
  //  we add Loading message
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  // props.video ===> video destructuring es6
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      {/* ui segment is card box style */}
      <div className="ui segment">
        <h4 className="ui header">
          {video.snippet.title}
        </h4>
        <p>{video.snippet.description}</p>
      </div>
      
    </div>
  );
}

export default VideoDetail;