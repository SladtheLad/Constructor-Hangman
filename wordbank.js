//Wordbank of Atari games that the user can guess from

const wordBank = ["asteroids", "centipede", "firefox", "millipede", "missile command", "pong", "return of the jedi", "star wars", "tank"];
const random = Math.floor(Math.random() * wordBank.length);
const randomWord = wordBank[random];

module.exports = randomWord;