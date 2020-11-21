import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {

  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src, poster, properties} = this.props;
    const {muted, width, height} = properties;
    const video = this._videoRef.current;
    if (video) {
      video.muted = muted;
      video.width = width;
      video.height = height;
      video.poster = poster;
      video.src = src;
    }

  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      this._playTimeout = setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
      clearTimeout(this._playTimeout);
    }
  }

  render() {

    return (
      <video
        ref={this._videoRef}
      />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  properties: PropTypes.shape().isRequired
};
