/* Things to do for HANGMAN GAME:
* USE hangman-cli-art npm
* USE inquirer

*/
//This sets up a node package that renders Hangman styled art for the game in the terminal
const HangmanArt = require("hangman-cli-art");

const art = new HangmanArt({
  marginX: 5,
  marginY: 0
});

//Loads and allows use of Inquirer node package
const inquirer = require("inquirer");

