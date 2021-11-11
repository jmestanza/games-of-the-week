import { useState } from "react";
import Game from "../../model/Game";
import GameFields from "../../model/GameFields";
import gameServices from "../../services/gameServices";

const useForm = () => {
  const [gameToSubmit, setGameToSubmit] = useState(Game());

  const validateGame = (game) => {
    console.log("game to validate ", game);
    const emptyValue = (formValue) => formValue === "";

    if (Object.values(game).some(emptyValue)) return false;

    const numbersToCheck = [
      GameFields.ageMin,
      GameFields.ageMax,
      GameFields.playersMin,
      GameFields.playersMax,
      GameFields.duration,
    ];

    const isNumeric = (num) => !isNaN(num);

    if (numbersToCheck.some((field) => !isNumeric(game[field]))) return false;

    numbersToCheck.forEach((field) => (game[field] = parseInt(game[field])));
    setGameToSubmit(game);

    return true;
  };

  const onChangeHandler = (field) => (event) =>
    setGameToSubmit({ ...gameToSubmit, [field]: event.target.value });

  const submitGame = () => {
    if (validateGame(gameToSubmit)) {
      gameServices.add(gameToSubmit);
    } else {
      console.warn("Not valid game to add");
    }
  };

  return [submitGame, onChangeHandler];
};

export default useForm;
