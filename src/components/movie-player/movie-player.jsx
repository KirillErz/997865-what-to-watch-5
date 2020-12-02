import React from "react";
import VideoPlayer from "../video-player/video-player";
import moment from "moment";

const MoviePlayer = (props) => {
  const {video, handlerProgressBar, progress, progressBar, duration,  isPlaying, classPlayer, handlerExitClick, handlerPlayClick, handlerFullScreenClick} = props;
  return (
    <div className="player">
      <VideoPlayer
          classPlayer={classPlayer}
          video={video}
      />

      <button onClick={()=>{handlerExitClick()}} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progress.toFixed(2)}
              max="100"
              ref={progressBar}
            />
            <div
              className="player__toggler"
              style={{left: (progress.toFixed(2)) + `%`}}
              onMouseDown={handlerProgressBar}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{moment.utc((duration) * 1000).format(`HH:mm:ss`, {trim: false})}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={handlerPlayClick} type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
            {isPlaying ?
              (<use xlinkHref="#pause"></use>) : (<use xlinkHref="#play-s"></use>)
            }
            </svg>
            <span>Play</span>
          </button>
          <button onClick={handlerFullScreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>);
};

export default MoviePlayer;
