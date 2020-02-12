const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.splitInLetters = function (string) {
  return string.split('');
}

AnagramFinder.prototype.allLowerCase = function (string) {
  return string.toLowerCase();
}

AnagramFinder.prototype.compareArrays = function (array1, array2) {
  // return true if they have the same elements
  // return false if they don't
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let lowercaseword = this.allLowerCase(this.word);
  let wordInLetters = lowercaseword.splitInLetters();
  otherWordsInLetters = otherWords.map(word => {
    return this.allLowerCase(word).splitInLetters();
  });
  const allAnagrams = otherWordsInLetters.filter( (otherWordInLetter) => {
    return this.compareArrays(otherWordInLetter, wordInLetters);
  });
}

module.exports = AnagramFinder;
