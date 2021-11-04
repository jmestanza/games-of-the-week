import Indicators from "./CarouselUtils/Indicators";
import Items from "./CarouselUtils/Items";
import Controls from "./CarouselUtils/Controls";

const GameCarousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <Indicators />
      <Items />
      <Controls />
    </div>
  );
};

export default GameCarousel;
