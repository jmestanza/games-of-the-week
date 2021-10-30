package com.challenge.rest.repository;

import com.challenge.rest.entity.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Integer> {

    public boolean existsByName(String name);

    public List<Game> findByName(String name);
    
    @Query("SELECT MAX(s.id) from Game s")
    public Integer findMaxId();
}
