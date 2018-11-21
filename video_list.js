import React from 'react';
import VideoUnit from './videoUnit';

const VideoList = (props) => {
  const videounits = props.videos.map((video) => {   ///POSIBLE ERROR, CON 'videounits', a 'video'
    return (
      <VideoUnit
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });
  return (
    <ul className = "col-md-4 list-group">
      {videounits}
    </ul>
  );
};

export default VideoList;
