package com.challenge.rest.model;

import lombok.Data;

@Data
public class Game {
    String name;
    int ageMin;
    int ageMax;
    int playersMin;
    int playersMax;
    int duration;
}
