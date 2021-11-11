import "./Items.css";

const imgStyle = {
  width: "100%",
  maxHeight: "750px",
  margin: "0 auto",
};

const itemStyle = {
  height: 600,
};

const numberOfPlayers = (min, max) =>{
  if(min === max)
    return min;
  else
    return `${min} - ${max}`;
}

const Items = ({ games }) => {

  return (
    <div className="carousel-inner">
      {games.map((game, index) => (
        <div
          className={index === 0 ? "carousel-item active" : "carousel-item"}
          style={itemStyle}
        >
          <div className={"container"}>
            <img
              src={game.imgURL}
              className="d-block w-100"
              alt="..."
              style={imgStyle}
            />
          </div>
          <div className={"container"}>
            <div className="carousel-caption d-none d-md-block">
              <h5>{game.name}</h5>
              <p>Duration : {game.duration} minutes </p>
              <p>Suggested Age : {game.ageMin} - {game.ageMax}</p>
              <p>Number of Players : {numberOfPlayers(game.playersMin,game.playersMax)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
