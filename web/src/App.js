import './App.css';
import {useEffect, useState} from "react";

function App() {
  const url = 'http://localhost:8080/api/games'

  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch(url).then(res=> res.json()).then(res => setGames(res));
  }, []);
  console.log('games:', games);
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
