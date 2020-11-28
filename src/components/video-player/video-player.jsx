import React from "react";

const VideoPlayer = (props) => {
  const {video, classPlayer} = props;
  return (
    <video
      class={classPlayer}
      ref={video}
    />
  );
};

export default VideoPlayer;



