import React from "react";

const VideoPlayer = (props) => {
  const {video} = props;
  return (
    <video
      ref={video}
    />
  );
};

export default VideoPlayer;



