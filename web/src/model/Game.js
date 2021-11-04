const Game = (name, ageMin, ageMax, playersMin, playersMax, duration) => {
  const initValue = "";
  const setInitValue = (value) => (value === undefined ? "" : value);
  return {
    name: setInitValue(name),
    ageMin: setInitValue(ageMin),
    ageMax: setInitValue(ageMax),
    playersMin: setInitValue(playersMin),
    playersMax: setInitValue(playersMax),
    duration: setInitValue(duration),
  };
};

export default Game;
