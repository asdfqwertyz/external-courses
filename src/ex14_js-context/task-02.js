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
      return this;
    } else {
      this.arrMissSym.push(sym);
      console.log(
        `wrong letter, errors left ${--this.numOfCanMissSym} | ${
          this.arrMissSym
        }`
      );
      return this;
    }
  };
  this.getGuessedString = function() {
    console.log(this.unspecified.join(""));
    return this;
  };
  this.getErrorsLeft = function() {
    console.log(this.numOfCanMissSym);
    return this;
  };
  this.getWrongSymbols = function() {
    console.log(this.arrMissSym);
    return this;
  };
  this.getStatus = function() {
    console.log(
      `${this.unspecified.join("")} | errors left ${this.numOfCanMissSym}`
    );
    return this;
  };
  this.startAgain = function(newWord) {
    this.word = newWord;
    this.numOfCanMissSym = 6;
    this.arrMissSym = [];
    this.unspecified = "_".repeat(newWord.length).split("");
    return this;
  };
}
module.exports = Hangman