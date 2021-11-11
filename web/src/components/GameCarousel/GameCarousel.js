import Indicators from "./CarouselUtils/Indicators";
import Items from "./CarouselUtils/Items";
import Controls from "./CarouselUtils/Controls";
import { useEffect, useState } from "react";
import gameService from "../../services/gameServices";

const GameCarousel = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll(setGames);
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <Indicators games={games} />
      <Items games={games} />
      <Controls games={games} />
    </div>
  );
};

export default GameCarousel;
