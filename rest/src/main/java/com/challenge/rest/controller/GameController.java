package com.challenge.rest.controller;

import com.challenge.rest.entity.Game;
import com.challenge.rest.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping("/games")
    public List<Game> getGames(){
        return gameService.readGames();
    }

    @PostMapping("/games/add")
    public String addGame(@RequestBody Game game){
        return gameService.createGame(game);
    }

    @PostMapping("/games/delete")
    public String deleteGame(@RequestBody String gameName){
        return gameService.deleteGame(gameName);
    }

    @PostMapping("/games/update")
    public String updateGame(@RequestBody Game game){
        return gameService.updateGame(game);
    }
}
