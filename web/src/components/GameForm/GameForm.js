import useForm from "./useForm";

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
            onChange={onChangeHandler("name")}
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
            onChange={onChangeHandler("duration")}
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
            onChange={onChangeHandler("ageMin")}
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
            onChange={onChangeHandler("ageMax")}
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
            onChange={onChangeHandler("playersMin")}
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
            onChange={onChangeHandler("playersMax")}
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
