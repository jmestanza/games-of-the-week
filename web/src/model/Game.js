const Game = (name, ageMin, ageMax, playersMin, playersMax, duration, imgURL) => {
  const initValue = "";
  const setInitValue = (value) => (value === undefined ? initValue : value);
  return {
    name: setInitValue(name),
    ageMin: setInitValue(ageMin),
    ageMax: setInitValue(ageMax),
    playersMin: setInitValue(playersMin),
    playersMax: setInitValue(playersMax),
    duration: setInitValue(duration),
    imgURL: setInitValue(imgURL)
  };
};

export default Game;
