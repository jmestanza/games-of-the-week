const GameForm = () => {
    const titleStyle = {
        display: 'flex',
        "align-items": 'center',
        "justify-content": 'center',
        color: 'white'
    }

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
          />
        </div>


        <div className="col-12" style={titleStyle}>
          Age
        </div>
        <div className="col-md-2">
          <label htmlFor="GameMinAge" className="form-label">
            Min
          </label>
          <input type="text" className="form-control" id="GameMinAge" placeholder="3" />
        </div>
        <div className="col-md-2">
          <label htmlFor="GameMaxAge" className="form-label">
              Max
          </label>
          <input type="text" className="form-control" id="GameMaxAge" placeholder="10" />
        </div>

          <div className="col-12" style={titleStyle}>
              Number of Players
          </div>
          <div className="col-md-2">
              <label htmlFor="PlayersMin" className="form-label">
                  Min
              </label>
              <input type="text" className="form-control" id="PlayersMin" placeholder="2" />
          </div>
          <div className="col-md-2">
              <label htmlFor="PlayersMax" className="form-label">
                  Max
              </label>
              <input type="text" className="form-control" id="PlayersMax" placeholder="5" />
          </div>


        <div className="col-12" style={titleStyle}>

          <button type="submit" className="btn btn-primary">
              Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default GameForm;
