import React from "react";
import PropTypes from "prop-types";

class FormReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textValue: ``,
      starValue: 5
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleStarChange = this.handleStarChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({textValue: event.target.value});
  }

  handleStarChange(event) {
    this.setState({starValue: event.target.value});
  }

  render() {

    const {onReview} = this.props;

    return (
      <form
        onSubmit={onReview(this.state.textValue, this.state.starValue)}
        onChange={this.handleStarChange.bind(this)}
        action="#"
        className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={this.handleTextChange} value={this.state.textValue} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    );
  }
}

FormReview.propTypes = {
  onReview: PropTypes.PropTypes.func
};

export default FormReview;
