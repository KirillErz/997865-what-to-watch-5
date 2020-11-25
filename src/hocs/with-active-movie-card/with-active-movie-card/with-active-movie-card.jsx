import React, {PureComponent, createRef} from "react";

const withActivMovieCard = (Component) => {
  class withActivMovieCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      }
      this._playTimeout = 0;
      this.videoRef = createRef();
      this.handlerMouseOver = this.handlerMouseOver.bind(this);
      this.handlerMouseOut = this.handlerMouseOut.bind(this);
    }

    componentDidMount() {
      const {film: {src, poster}} = this.props;
      console.log(src);
      if (this.videoRef.current) {
        this.videoRef.current.muted = `muted`;
        this.videoRef.current.width = 280;
        this.videoRef.current.height = 175;
        this.videoRef.current.poster = poster;
        this.videoRef.current.src = src;
      }

    }

    componentDidUpdate() {
      if (this.state.isPlaying) {
        this._playTimeout = setTimeout(() => {
          this.videoRef.current.play();
        }, 1000);
      } else {
        this.videoRef.current.load();
        clearTimeout(this._playTimeout);
      }
    }

    handlerMouseOver() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    handlerMouseOut() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    render() {
      return <Component
        {...this.props}
        video={this.videoRef}
        onMouseOver={this.handlerMouseOver}
        onMouseOut={this.handlerMouseOut}
      />
    };

  }
  return withActivMovieCard;
};

export default withActivMovieCard;
