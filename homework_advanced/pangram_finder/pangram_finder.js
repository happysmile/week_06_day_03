const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.eliminateSpaces = function (string) {
  return string.replace(/\s+/g, '');
}

PangramFinder.prototype.splitInLetters = function (string) {
  return string.split('');
}

PangramFinder.prototype.allLowerCase = function (string) {
  return string.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  let phraseWithoutSpaces = this.eliminateSpaces(this.phrase);
  let phraseWithoutSpacesLowercase = this.allLowerCase(phraseWithoutSpaces);
  let arrayOfLetters = phraseWithoutSpacesLowercase.split('');
  return this.alphabet.every( (letter) => {
    return arrayOfLetters.includes(letter);
  });
}


module.exports = PangramFinder;
