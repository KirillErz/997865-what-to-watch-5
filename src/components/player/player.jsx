import React, {Fragment} from "react";
import MoviePlayer from "../movie-player/movie-player";
import withMoviePlayer from "../../hocs/with-active-movie-card/with-movie-player/with-movie-player";
import {connect} from "react-redux";
import {getPromoMovie} from "../../store/reducers/selectors"

const MoviePlayerWrapper = withMoviePlayer(MoviePlayer);

const Player = (props) => {
  const {promoMovie, history} = props;
  return (
    <Fragment>
      <MoviePlayerWrapper
        promo={promoMovie}
        history={history}
      />
    </Fragment>
  );

};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state)
});


export {Player};
export default connect(mapStateToProps)(Player);
