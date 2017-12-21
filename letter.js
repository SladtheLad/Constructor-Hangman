//Constructor that eiteher displays an underlying character, or a blank placeholer (such as an underscore) for the Atari game to guess

const Letter = function (guess) {
  //letter guessed
  this.wordLetter = guess;
  //whether or not letter has been guessed and can be shown
  this.showLetter = false;

  this.letterShow = function () {
    //if there is a blank space in the word, then displays the blank
    if (this.wordLetter === " ") {
      this.showLetter = true;
      return " ";
    }

    //shows blank or letter
    if (this.showLetter === true) {
      return " " + this.wordLetter + " ";
    } else {
      return " _ ";
    }
  };
};

exports.Letter = Letter;