import Game from "../../model/Game";
import { useState } from "react";
import gameServices from "../../services/gameServices";

const GameForm = () => {
  const titleStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  const [gameToSubmit, setGameToSubmit] = useState(Game());

  const checkFormValue = (formValue) => {
    return formValue === null || formValue === "";
  };

  const validateGame = (game) => {
    console.log("game to validate: ", game);
    if (Object.values(game).some(checkFormValue)) {
      const idx = Object.values(game).findIndex((v) => checkFormValue(v));
      console.log("failing on:", idx);
      console.log("failed on first val");
      console.log(Object.values(game));
      return false;
    }

    const numbersToCheck = [
      "ageMin",
      "ageMax",
      "playersMin",
      "playersMax",
      "duration",
    ];
    const isNumeric = (num) => !isNaN(num);
    if (numbersToCheck.some((field) => !isNumeric(game[field]))) return false;
    try {
      numbersToCheck.forEach((field) => {
        game[field] = parseInt(game[field]);
      });
      setGameToSubmit(game);
      return true;
    } catch (error) {
      console.log("couldnt parse numbers in game");
      console.log("error");
      return false;
    }
  };

  const onFormSubmit = () => {
    if (validateGame(gameToSubmit)) {
      gameServices.add(gameToSubmit);
    } else {
      console.warn("nto valid game to add");
    }
  };
  return (
    <>
      <form className="row justify-content-md-center">
        <div className="col-2">
          <label htmlFor="Game Name" className="form-label">
            Game Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Game Name"
            placeholder="Jumanji"
            onChange={(event) =>
              setGameToSubmit({ ...gameToSubmit, name: event.target.value })
            }
          />
        </div>

        <div className="col-2">
          <label htmlFor="Duration" className="form-label">
            Duration (in minutes)
          </label>
          <input
            type="text"
            className="form-control"
            id="Duration"
            placeholder="60"
            onChange={(event) =>
              setGameToSubmit({ ...gameToSubmit, duration: event.target.value })
            }
          />
        </div>

        <div className="col-12" style={titleStyle}>
          Age
        </div>
        <div className="col-md-2">
          <label htmlFor="GameMinAge" className="form-label">
            Min
          </label>
          <input
            type="text"
            className="form-control"
            id="GameMinAge"
            placeholder="3"
            onChange={(event) =>
              setGameToSubmit({ ...gameToSubmit, ageMin: event.target.value })
            }
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="GameMaxAge" className="form-label">
            Max
          </label>
          <input
            type="text"
            className="form-control"
            id="GameMaxAge"
            placeholder="10"
            onChange={(event) =>
              setGameToSubmit({ ...gameToSubmit, ageMax: event.target.value })
            }
          />
        </div>

        <div className="col-12" style={titleStyle}>
          Number of Players
        </div>
        <div className="col-md-2">
          <label htmlFor="PlayersMin" className="form-label">
            Min
          </label>
          <input
            type="text"
            className="form-control"
            id="PlayersMin"
            placeholder="2"
            onChange={(event) =>
              setGameToSubmit({
                ...gameToSubmit,
                playersMin: event.target.value,
              })
            }
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="PlayersMax" className="form-label">
            Max
          </label>
          <input
            type="text"
            className="form-control"
            id="PlayersMax"
            placeholder="5"
            onChange={(event) =>
              setGameToSubmit({
                ...gameToSubmit,
                playersMax: event.target.value,
              })
            }
          />
        </div>
      </form>
      <div className="col-12" style={{ ...titleStyle, height: 100 }}>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onFormSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default GameForm;
