import React, {PureComponent, createRef} from "react";

export default class VideoPlayer extends PureComponent {

  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
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

  componentWillUnmount() {
    const video = this._videoRef.current;
    //clearInterval(this.interval);
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




