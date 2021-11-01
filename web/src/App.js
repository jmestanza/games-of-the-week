import './App.css';
import {useEffect, useState} from "react";
import gameServices from "./services/gameServices";
import Game from "./model/Game";

function App() {
  const [games, setGames] = useState([]);


  useEffect(() => {
    gameServices.getAll(setGames);
    const Pirates = new Game('Pirates3', 1,2,3,4,5);
    gameServices.add(Pirates);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          here are the games:
        {games.map(game => <div key={game.name}>{game.name}</div>)}
      </header>
    </div>
  );
}

export default App;
