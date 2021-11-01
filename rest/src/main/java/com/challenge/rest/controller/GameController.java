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
}
