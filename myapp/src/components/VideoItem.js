import React from 'react';

// const VideoItem = (props) => {
//   return <div>Video Item</div>;
// }

// export default VideoItem;
// There are 5 separate instances of video component and each have separate video obj
const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
}

export default VideoItem;