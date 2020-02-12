const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.splitInLetters = function (string) {
  return string.split('');
}

AnagramFinder.prototype.allLowerCase = function (string) {
  return string.toLowerCase();
}

AnagramFinder.prototype.areArraysIdentical = function(array1, array2) {
  if ( array1.join('') === array2.join('') ){
    return true;
  } else {
    return false;
  };
};

AnagramFinder.prototype.areArraysSameSize = function(array1, array2) {
  if ( array1.length === array2.length ){
    return true;
  } else {
    return false;
  };
}

AnagramFinder.prototype.compareArrays = function (array1, array2) {
  // return true if they have the same elements
  // return false if they don't
  return array1.every(element => array2.includes(element));
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  let splitWord = this.splitInLetters(this.word);
  splitOtherWords = otherWords.map(word => {
    return this.splitInLetters(word);
  });
  const anagrams = splitOtherWords.filter( (splitOtherWord) => {
    if(!this.areArraysIdentical(splitWord, splitOtherWord)){
      if(this.areArraysSameSize(splitWord, splitOtherWord)){
        let lowerCaseSplitWord = splitWord.map(letter => letter.toLowerCase());
        let lowerCaseSplitOtherWord = splitOtherWord.map(letter => letter.toLowerCase());
        return this.compareArrays(lowerCaseSplitOtherWord, lowerCaseSplitWord);
      }
    }
  });
  return anagrams.map(word => word.join(''));
}

module.exports = AnagramFinder;
