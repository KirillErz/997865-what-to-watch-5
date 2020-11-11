import React, {PureComponent} from 'react';
import VideoPlayer from '../../components/video-player/video-player';


const withVideoPlayer = (Component) => {

  class withVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {

      return (
        <Component
          {...this.props}
        />
      );

    }

  }
  return withVideoPlayer;
}

export default withActivePlayer;
