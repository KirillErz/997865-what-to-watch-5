import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {MAX_SHOW_MOVIES_COUNT} from "../../const";

const ShowMore = (props) => {
  const {handlerOnClickShowMore} = props;
  return (
    <Fragment>
      <button onClick={() => handlerOnClickShowMore(MAX_SHOW_MOVIES_COUNT)} className="catalog__button" type="button">Show more</button>
    </Fragment>
  );
};

export default ShowMore;

ShowMore.propTypes = {
  handlerOnClickShowMore: PropTypes.func.isRequired
};

