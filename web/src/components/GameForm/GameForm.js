import useForm from "./useForm";
import GameFields from "../../model/GameFields";
import GameInput from "./GameInput";

const GameForm = () => {
  const titleStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  const [submitGame, onChangeHandler] = useForm();

  const onFormSubmit = () => {
    submitGame();
  };

  const gamesInfo = [
    { label: "Game Name", field: GameFields.name, defaultValue: "Jumanji" },
    { label: "Duration", field: GameFields.duration, defaultValue: "60" },
    { label: "Min", field: GameFields.ageMin, defaultValue: "2" },
    { label: "Max", field: GameFields.ageMax, defaultValue: "99" },
    { label: "Min", field: GameFields.playersMin, defaultValue: "2" },
    { label: "Max", field: GameFields.playersMax, defaultValue: "10" },
  ];

  return (
    <>
      <form className="row justify-content-md-center">
        <GameInput {...gamesInfo[0]} onChange={onChangeHandler} />
        <GameInput {...gamesInfo[1]} onChange={onChangeHandler} />
        <div className="col-12" style={titleStyle}>
          Age
        </div>
        <GameInput {...gamesInfo[2]} onChange={onChangeHandler} />
        <GameInput {...gamesInfo[3]} onChange={onChangeHandler} />
        <div className="col-12" style={titleStyle}>
          Number of Players
        </div>
        <GameInput {...gamesInfo[4]} onChange={onChangeHandler} />
        <GameInput {...gamesInfo[5]} onChange={onChangeHandler} />
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
