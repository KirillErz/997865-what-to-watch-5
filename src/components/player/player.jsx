import React, {Fragment} from "react";
import MoviePlayer from "../movie-player/movie-player";
import withMoviePlayer from "../../hocs/with-active-movie-card/with-movie-player/with-movie-player"

const MoviePlayerWrapper = withMoviePlayer(MoviePlayer);

const Player = (props) => {
  const {id, promo,  history} = props;

  return (
    <Fragment>
      <MoviePlayerWrapper
        promo={promo}
        history={history}
      />
    </Fragment>
  );

};

export default Player;
