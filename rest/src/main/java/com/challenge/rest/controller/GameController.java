package com.challenge.rest.controller;

import com.challenge.rest.model.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class GameController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/games")
    public List<Game> getGames(){
        String sql = "SELECT * FROM GAMES";
        List<Game> games = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Game.class));
        return games;
    }
}
