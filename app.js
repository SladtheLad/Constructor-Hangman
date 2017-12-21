//THE GAME
const wordBank = require('./wordbank.js');
const word = require('./word.js');
const letter = require('./letter.js');
const inquirer = require('inquirer');


//const HangmanArt = require('hangman-cli-art')

//const art = new HangmanArt({
//  marginX: 0,
// marginY: 0
//})



console.log(`\n
***************************************************************
              GUESS THIS ORIGNAL ATARI 2600 GAME
              ----------------------------------
                    You will get 10 guesses
          Guess correctly and your guess gets refunded
***************************************************************`);

//object storing the game logic
const game = {
  guessesLeft: 10,
  wordChosen: null,

  startGame: function () {
    //sets the number of guesses to 10
    this.guessesLeft = 10;
    //pulls a random game from wordbank
    this.wordChosen = new word.word(wordBank);
    //splits word into an array of letters
    this.wordChosen.splitWord();
    //beins prompting player

    console.log('Atari Game: ' + this.wordChosen.wordGuessResult());
    console.log('\n');

    this.promptPlayer();
  },

  promptPlayer: function () {
    const that = this;

    inquirer.prompt([{
      name: "guessPrompt",
      message: "Guess a letter!"
    }]).then(function (answer) {

      if (this.lettersGuessed === undefined) {
        this.lettersGuessed = answer.guessPrompt + ", ";
      } else {
        this.lettersGuessed += answer.guessPrompt.toString() + ", ";
      };


      let guessResult = that.wordChosen.letterFound(answer.guessPrompt);


      if (guessResult === 0) {
        console.log(`Nice Try. Guess again!`)
        that.guessesLeft -= 1;
        //art.next() // call next() to render next part 
      } else if (guessResult !== 0) {
        console.log(`You guessed correct! Your guess was refunded!`)


        if (that.wordChosen.checkWordGuess()) {
          console.log(`\n
***************************************************************
                        YOU WON! 
            You really know your Atari games!
***************************************************************
        `);
          return;
        };
      };

      console.log(`\n
--------------------------------------------------------------
Guesses remaining: ${that.guessesLeft}

Atari Game: ${that.wordChosen.wordGuessResult()}

Letters you have guessed: ${this.lettersGuessed}
--------------------------------------------------------------
    `);

      if ((that.guessesLeft > 0) && (that.wordChosen.answer === false)) {
        that.promptPlayer();
      } else if (that.guessesLeft === 0) {
        console.log(`\n
***************************************************************
I'm sorry! The game was "${that.wordChosen.word}". 
Try again later after you've done some research on Atari games!
***************************************************************
      `);
      } else {
        console.log(that.wordChosen.wordGuessResult())

      }

    });
  },
};

game.startGame();