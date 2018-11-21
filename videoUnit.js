import React from 'react';

const VideoUnit = ({video, onVideoSelect}) => {  /// chequea....
  const imageUrl = video.snippet.thumbnails.default.url;
  //const video = props.video;
  //console.log(video);
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" src={imageUrl} />
      </div>
    </div>

    <div className="media-body">
      <div className="media-heading">{video.snippet.title}</div>
    </div>
</li>
  );
};

export default VideoUnit;
