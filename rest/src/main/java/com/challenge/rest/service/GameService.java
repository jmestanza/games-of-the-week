package com.challenge.rest.service;

import com.challenge.rest.entity.Game;
import com.challenge.rest.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    @Transactional
    public String createGame(Game game){
        try {
            if(!gameRepository.existsByName(game.getName())){
                game.setId(gameRepository.findMaxId() +1);
                gameRepository.save(game);
                return "success on add";
            } else {
                return "failed to add";
            }
        } catch (Exception e){
            throw e;
        }
    }

    @Transactional
    public List<Game> readGames(){
        return gameRepository.findAll();
    }

    @Transactional
    public String updateGame(Game game){
        if(gameRepository.existsByName(game.getName())){
            try {
                List<Game> games = gameRepository.findByName(game.getName());
                games.forEach(g -> {
                    Game gameToBeUpdated = gameRepository.findById(g.getId()).get();
                    gameToBeUpdated.setName(game.getName());
                    gameToBeUpdated.setAgeMin(game.getAgeMin());
                    gameToBeUpdated.setAgeMax(game.getAgeMax());
                    gameToBeUpdated.setPlayersMin(game.getPlayersMin());
                    gameToBeUpdated.setPlayersMax(game.getPlayersMax());
                    gameToBeUpdated.setDuration(game.getDuration());
                    gameToBeUpdated.setImgURL(game.getImgURL());
                    gameRepository.save(gameToBeUpdated);
                });
                return "Game record updated";
            } catch (Exception e){
                throw e;
            }
        } else {
            return "Game does not exist in the database";
        }
    }

    @Transactional
    public String deleteGame(String gameName){
        if(gameRepository.existsByName(gameName)){
            try {
                List<Game> games = gameRepository.findByName(gameName);
                games.forEach(g -> {
                    gameRepository.delete(g);
                });
                return "Game record updated";
            } catch (Exception e){
                throw e;
            }
        } else {
            return "Game does not exist in the database";
        }
    }
}
