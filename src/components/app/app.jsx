import React from "react";
import PropTypes from "prop-types";
import StartScreen from "../start-screen/start-screen";


const App = (props) => {
  const {properties} = props;
  const genre = properties.genre;
  const releaseDate = properties.releaseDate;
  return (
    <StartScreen
      genre={genre}
      releaseDate={releaseDate}
    />
  );
};
// как сделать так что бы проверить сразу свойства объекта ?
App.propTypes = {
  properties: PropTypes.shape({
    genre: PropTypes.string,
    releaseDate: PropTypes.number
  })
};

export default App;
