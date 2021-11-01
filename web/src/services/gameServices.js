const baseUrl = 'http://localhost:8080/api/';
const addGameUrl = baseUrl+'games/add';
const getGamesUrl = baseUrl+'games'

const gameService = {
    add: (game) => {
        fetch(addGameUrl, {
            method: 'POST',
            body: JSON.stringify(game),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(err => console.log('error adding', err))
            .then(res => console.log(res));
    },
    getAll: (setGames) => {
        fetch(getGamesUrl).then(res=> res.json()).then(res => setGames(res));
    }
};

export default gameService;