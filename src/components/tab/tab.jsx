import React, {PureComponent} from "react";

export default class Tab extends PureComponent {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.tabIndex);
  }

  render() {
    return (
      <li className={`movie-nav__item ${this.props.isActive ? 'movie-nav__item--active' : ''}`}>
        <a className="movie-nav__link"
           onClick={this.handleTabClick}>
          {this.props.tabName}
        </a>
      </li>
    );
  }
}
