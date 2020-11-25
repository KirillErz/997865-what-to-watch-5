import React from "react";
import PropTypes from "prop-types";

const Tabs = (props) => {
  const {renderChildrenWithTabsApiAsProps, renderActiveTabContent} = props;

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {renderChildrenWithTabsApiAsProps()}
        </ul>
      </nav>
      {renderActiveTabContent()}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.array.isRequired
};

export default Tabs;
