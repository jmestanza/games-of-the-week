import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import Game from "./model/Game";
import gameServices from "./services/gameServices";
import useWindowDimensions from "./utils/windowDimensions";
import GameCarousel from "./components/GameCarousel/GameCarousel";
import GameForm from "./components/GameForm/GameForm";

const backgroundUrl =
  "https://20fd661yccar325znz1e9bdl-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/best-board-games-scaled-e1630330799434.jpeg";

function App() {
  const [games, setGames] = useState([]);
  const { height, width } = useWindowDimensions();
  console.log(`height: ${height} width: ${width}`);

  const AppStyle = {
    backgroundPosition: "center-center",
    backgroundRepeat: "no-repeat",
    maxWidth: "100%",
    height: height - 1,
    backgroundImage: `url(${backgroundUrl})`,
  };

  useEffect(() => {
    gameServices.getAll(setGames);
    const Pirates = Game("Pirates2", 1, 2, 3, 4, 50);
    // gameServices.add(Pirates);
    // gameServices.delete('Pirates2');
    // gameServices.update(Pirates);
  }, []);

  const titleStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  };

  return (
    <div style={AppStyle}>
      <div style={titleStyle}>
        <h2>Games of the Week</h2>
      </div>

      <div className={"container"}>
        <GameCarousel />
      </div>

      <div className={"container"}>
        <div style={titleStyle}>
          <h2>Want to Add a Game?</h2>
        </div>
        <GameForm />
      </div>
    </div>
  );
}

export default App;
