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

  const onFormSubmit = () => submitGame();

  const gamesInfo = [
    {
      className: "col-2",
      label: "Game Name",
      field: GameFields.name,
      defaultValue: "Jumanji",
    },
    {
      className: "col-2",
      label: "Duration",
      field: GameFields.duration,
      defaultValue: "60",
    },
    {
      className: "col-2",
      label: "Min",
      field: GameFields.ageMin,
      defaultValue: "2",
    },
    {
      className: "col-2",
      label: "Max",
      field: GameFields.ageMax,
      defaultValue: "99",
    },
    {
      className: "col-2",
      label: "Min",
      field: GameFields.playersMin,
      defaultValue: "2",
    },
    {
      className: "col-2",
      label: "Max",
      field: GameFields.playersMax,
      defaultValue: "10",
    },
    {
      className: "col-6",
      label: "",
      field: GameFields.imgURL,
      defaultValue:
        "https://pbs.twimg.com/profile_images/1312063891069972480/DlNHL3w7.jpg",
    },
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
        <div className="col-12" style={titleStyle}>
          Img URL:
        </div>
        <GameInput {...gamesInfo[6]} onChange={onChangeHandler} />
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
