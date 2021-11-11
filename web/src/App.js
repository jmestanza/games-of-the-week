import "bootstrap/dist/css/bootstrap.min.css";
import GameCarousel from "./components/GameCarousel/GameCarousel";
import GameForm from "./components/GameForm/GameForm";

const backgroundUrl =
  "https://20fd661yccar325znz1e9bdl-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/best-board-games-scaled-e1630330799434.jpeg";

function App() {
  const AppStyle = {
    backgroundPosition: "center-center",
    backgroundRepeat: "no-repeat",
    WebkitBackgroundSize: "cover",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    maxWidth: "100%",
    backgroundImage: `url(${backgroundUrl})`,
  };

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
