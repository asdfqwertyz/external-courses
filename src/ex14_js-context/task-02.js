function Hangman(word) {
  this.word = word;
  this.numOfCanMissSym = 6;
  this.arrMissSym = [];
  this.unspecified = "_".repeat(this.word.length).split("");
  this.guess = function(sym) {
    if (sym === "") {
      return this;
    }
    if (this.numOfCanMissSym === 0) {
      return "У вас закончились попытки";
    }
    if (this.word.includes(sym)) {
      for (let i = 0; i < this.word.length; i++) {
        if (
          (i > 1 &&
            this.word.indexOf(sym, i + 1) === this.word.indexOf(sym, i + 2)) ||
          this.word.indexOf(sym, i) === -1
        ) {
          continue;
        }
        this.unspecified[this.word.indexOf(sym, i)] = sym;
      }
      if (!this.unspecified.includes("_")) {
        console.log(this.unspecified.join("") + " | You Won!");
        return this;
      }
      console.log(this.unspecified.join(""));
    } else {
      this.arrMissSym.push(sym);
      console.log(
        `wrong letter, errors left ${--this.numOfCanMissSym} | ${
          this.arrMissSym
        }`
      );
      return this;
    }
    return this
  };
  this.getGuessedString = function() {
    return this.unspecified.join("");
  };
  this.getErrorsLeft = function() {
    return this.numOfCanMissSym;
  };
  this.getWrongSymbols = function() {
    return this.arrMissSym;
  };
  this.getStatus = function() {
    return `${this.unspecified.join("")} | errors left ${this.numOfCanMissSym}`;
  };
  this.startAgain = function(newWord) {
    this.word = newWord;
    this.numOfCanMissSym = 6;
    this.arrMissSym = [];
    this.unspecified = "_".repeat(newWord.length).split("");
    return this;
  };
}
let hangman = new Hangman('webpurple')
module.exports = hangman
