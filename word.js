const letter = require('./letter.js');

const word = function (word) {
  //Atari game/word to guess
  this.word = word;
  //Array to store letters of the word to guess
  this.letterArray = [];
  this.answer = false;

  //function to split the word to guess and push into an array
  this.splitWord = function () {
    for (var i = 0; i < this.word.length; i++) {
      this.letterArray.push(new letter.Letter(this.word[i]));
    };
  };

  //Check if word is guessed to end game
  this.checkWordGuess = function () {
    let lettersCorect = 0;

    for (var i = 0; i < this.letterArray.length; i++) {
      if (this.letterArray[i].showLetter === true) {
        lettersCorect += 1;
      }
    };

    if (lettersCorect === this.letterArray.length) {
      this.answer = true;
    } else {
      this.answer = false;
    };

    return this.answer;
  };

  //Checks if letter is found and sets showLetter in Letter constructor from letter.js to true
  this.letterFound = function (guessPrompt) {
    let letFound = 0;
    for (var i = 0; i < this.letterArray.length; i++) {
      if (this.letterArray[i].wordLetter === guessPrompt) {
        this.letterArray[i].showLetter = true;
        letFound += 1;
      };
    };
    //returns the number of letters found
    return letFound;
  };

  //Checks and then displays the word based on guessed lelters
  this.wordGuessResult = function () {
    let display = "";
    for (var i = 0; i < this.letterArray.length; i++) {
      display += this.letterArray[i].letterShow();
    };
    return display;
  };
};

exports.word = word;