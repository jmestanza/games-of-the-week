const baseUrl = '/api/';
const addGameUrl = baseUrl+'games/add';
const updateGameUrl = baseUrl+'games/update';
const deleteGameUrl = baseUrl+'games/delete';
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
        fetch(getGamesUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=> res.json()).then(res => setGames(res));
    },
    delete: (gameName) => {
        fetch(deleteGameUrl, {
            method: 'DELETE',
            body: gameName,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(err => console.log('error adding', err))
            .then(res => console.log(res));
    },
    update: (game) => {
        fetch(updateGameUrl, {
            method: 'PUT',
            body: JSON.stringify(game),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(err => console.log('error adding', err))
            .then(res => console.log(res));
    }
};

export default gameService;