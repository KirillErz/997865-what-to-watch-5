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
    video.muted = muted;
    video.width = width;
    video.height = height;
    video.poster = poster;
    video.src = src;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    //clearInterval(this.interval);
  }


  render() {

    return (
      <video
        ref={this._videoRef}
      />
    );

  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    video.load();
    if (this.props.isPlaying) {
      //this.interval = setInterval(() => video.play(), 1000);
      video.play();
    } else {
      video.pause();
    }
  }

}




