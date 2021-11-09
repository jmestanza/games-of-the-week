package com.challenge.rest.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "GAMES")
public class Game {

    @Id
    @Column(name = "ID")
    private int id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "AGEMIN")
    private int ageMin;
    @Column(name = "AGEMAX")
    private int ageMax;
    @Column(name = "PLAYERSMIN")
    private int playersMin;
    @Column(name = "PLAYERSMAX")
    private int playersMax;
    @Column(name = "DURATION")
    private int duration;

}
