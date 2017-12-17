class Letter {
  letter: string;
  showLetter: boolean;

  constructor(letter: string, showLetter: boolean) {
    // property to store the actual letter
    this.letter = letter;
    // property/boolean if the letter can be shown
    this.showLetter = false;
  }


  letterRender() {
    if (this.letter == " ") { /*renders a blank as it is*/
      //makes sure that when the function checks if the word is found doesn't read the blank as false.
      this.showLetter = true;
      return "  ";
    } if (this.showLetter === false) { /*if it doesn't showLetter, it returns a ' _ '*/
      return " _ ";
    } else { /*otherwise it just showLetters as itself*/
      return this.letter;
    }

  };
};

// export to use in word.js
exports.Letter = Letter;
