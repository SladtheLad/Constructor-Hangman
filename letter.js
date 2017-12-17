var Letter = /** @class */ (function () {
    function Letter(letter, appear) {
        // property to store the actual letter
        this.letter = letter;
        // property/boolean if the letter can be shown
        this.appear = false;
    }
    Letter.prototype.letterRender = function () {
        if (this.letter == ' ') {
            //makes sure that when the function checks if the word is found doesn't read the blank as false.
            this.appear = true;
            return '  ';
        }
        if (this.appear === false) {
            return ' _ ';
        }
        else {
            return this.letter;
        }
    };
    ;
    return Letter;
}());
;
// export to use in word.js
module.exports = Letter;
