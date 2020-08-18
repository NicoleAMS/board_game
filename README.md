# Winx Club Board Game

OpenClassrooms Front-End Developer path project: 'Build a turn-based board game in JavaScript'.

## Introduction and game rules
This is the code for an object-oriented turn-based JavaScript board game, which I developed based on a brief that can be found in the documents folder above.

### Part 1: Grid
* The game starts with a grid with randomly placed obstacles (20% of all tiles), weapons (4) and players (2). 
* Each player has a default weapon that inflicts 10 points of damage. The other weapons cause higher damage. 
* Each player can move 1-3 steps N/E/S/W each turn, provided there is no obstacle or player in their way. 
* When landing on a tile with a different weapon, they can swap the weapon they are holding for the one on the tile.
* When landing on a tile adjacent to the other player, a battle begins 

### Part 2: Fight
* The player that caused the start of the fight, starts. 
* Each turn a player can choose to attack or to defend. 
* If attacking, the other player loses as many life points as the damage of the weapon the attacking player is holding.
* If defending, the player will sustain 50% less damage in the following attack.
* Each player starts of with 100 life points. 
* The game is over when one player has no life points left. A game over message appears. 


## Theme
The characters and weapons are based on Winx Club, which I used to watch with my sister many years ago. At the start of the game each player is randomly assigned a character. Player 1 is always a fairy (Bloom, Stella or Flora), Player 2 is always a witch (Icy, Darcy or Stormy). The theme and randomly assigning characters to players wasn't part of the requirements, but I liked the challenge and adding a personal touch to it.  

## Technologies
I used the following technologies:
* HTML 5 / CSS 3
* Vanilla JavaScript
* jQuery 