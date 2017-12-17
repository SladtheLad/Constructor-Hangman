// require letter objects
const letter = require('./letter');

class Word {
  word: string
  letterArray: string[]
  wordFound: boolean

  wordList = ["Atari", "Game Boy"]


  constructor(word: string, letterArray: string[], wordFound: boolean) {
    //store the string word
    this.word = word;
    //collection of letter objects
    this.letterArray = [];
    this.wordFound = false;

  }


  getletterArray() {
    //populate the collection above with new Letter objects
    for (var i = 0; i < this.word.length; i++) {
      let newLetter = new letter.Letter(this.word[i]);
      this.letterArray.push(newLetter);
    }
  };

//found the current word
wasWordGuessed() {
  var letterRight = 0;

  for (var i = 0; i < this.letterArray.length; i++) {
    if (this.letterArray[i].showLetter === true) {
      letterRight += 1;
    }
  };

  if (letterRight === this.letterArray.length) {
    this.wordFound = true;
  } else {
    this.wordFound = false;
  };

  return this.wordFound;
};

checkIfLetterFound(guessedLetter: string) {
  var whatToReturn = 0;
  //iterates through each letter to see if it matches the guessed letter
  this.letterArray.forEach(function (letter) {
    if (letter.letter === guessedLetter) {
      letter.showLetter = true;
      whatToReturn++;
    }
  })
  //if guessLetter matches Letter property, the letter object should be shown
  return whatToReturn;
};

this.wordRender = function () {
  var display = '';
  //render the word based on if letterArray are found or not
  that.letterArray.forEach(function (lttr) {
    var currentLetter = lttr.letterRender();
    display += currentLetter;
  });

  return display;
};
}

module.exports = Word;