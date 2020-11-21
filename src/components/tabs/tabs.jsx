import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex
    });
  }

  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  }

  renderActiveTabContent() {
    const {children} = this.props;
    const {activeTabIndex} = this.state;
    if (!children[activeTabIndex]) {
      return null;
    }
    return children[activeTabIndex].props.children;
  }


  render() {

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {this.renderChildrenWithTabsApiAsProps()}
          </ul>
        </nav>
        {this.renderActiveTabContent()}
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.array.isRequired
};
