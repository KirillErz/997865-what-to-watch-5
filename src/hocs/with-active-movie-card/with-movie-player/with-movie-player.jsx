import React, {PureComponent, createRef} from "react";

const withMoviePlayer = (Component) => {
  class withMoviePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        duration: 0,
        progress: 0
      };

      this._playTimeout = 0;
      this.videoRef = createRef();
      this.progressBar = createRef();
      this.handlerExitClick = this.handlerExitClick.bind(this);
      this.handlerPlayClick = this.handlerPlayClick.bind(this);
      this.handlerFullScreenClick = this.handlerFullScreenClick.bind(this);
      this.handlerProgressBar = this.handlerProgressBar.bind(this);
    }

    componentDidMount() {
      const {promo: {video_link, preview_image}} = this.props;
      if (this.videoRef.current) {
        this.videoRef.current.preload = "metadata";
        this.videoRef.current.poster = preview_image;
        this.videoRef.current.src = video_link;

        this.videoRef.current.onstarted = () => {
          this.setState({
            duration: this.videoRef.current.duration,
            isPlaying: true,
            progress: 0,
          });

          this.videoRef.current.play();
        };

        this.videoRef.current.onended = () => {
          this.setState({
            duration: 0,
            isPlaying: false,
          });

          this.videoRef.current.pause();
        };

        this.videoRef.current.ontimeupdate = () => {
          this.setState({
            duration: this.videoRef.current.duration - this.videoRef.current.currentTime,
            progress: this.videoRef.current.currentTime / this.videoRef.current.duration * 100
          });
        };

      }

    }

    componentDidUpdate() {
      if (this.state.isPlaying) {
        this.videoRef.current.play();
      } else {
        this.videoRef.current.pause();
      }
    }

    handlerPlayClick(evt) {
      evt.preventDefault();
      this.setState({isPlaying: !this.state.isPlaying});
    }

    handlerFullScreenClick(evt) {
      evt.preventDefault();
      this.videoRef.current.requestFullscreen();
    }

    handlerProgressBar(evt) {
      let target = evt.target;
      let startCoords = evt.clientX;
      const progressBarWidth = this.progressBar.current.offsetWidth;

      document.onmousemove = (moveEvt) => {
        let shift = startCoords - moveEvt.clientX;
        startCoords = moveEvt.clientX;
        let left = target.offsetLeft - shift;
        let percentCoords = left * 100 / progressBarWidth;
        let timeByCoords = left * this.videoRef.current.duration / progressBarWidth;

        if (percentCoords < 100 && percentCoords > 0) {
          this.videoRef.current.currentTime = timeByCoords;

          this.setState({
            duration: this.videoRef.current.duration - this.videoRef.current.currentTime,
            progress: percentCoords
          });
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };

      document.ondragstart = () => {
        return false;
      };
    }


    handlerExitClick() {
      this.props.history.goBack();
    }

    render() {
      return <Component
        {...this.props}
        isPlaying={this.state.isPlaying}
        classPlayer={`player__video`}
        video={this.videoRef}
        progressBar={this.progressBar}
        progress={this.state.progress}
        duration={this.state.duration}
        handlerProgressBar={this.handlerProgressBar}
        handlerExitClick={this.handlerExitClick}
        handlerPlayClick={this.handlerPlayClick}
        handlerFullScreenClick={this.handlerFullScreenClick}
      />;
    }

  }
  return withMoviePlayer;
};

export default withMoviePlayer;
