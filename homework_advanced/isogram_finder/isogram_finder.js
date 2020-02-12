const IsogramFinder = function (word) {
 this.word = word;
}

IsogramFinder.prototype.eliminateSpaces = function (string) {
  return string.replace(/\s+/g, '');
}

IsogramFinder.prototype.splitInLetters = function (string) {
  return string.split('');
}

IsogramFinder.prototype.allLowerCase = function (string) {
  return string.toLowerCase();
}

IsogramFinder.prototype.isIsogram = function () {
  let wordWithoutSpaces = this.eliminateSpaces(this.word);
  let wordWithoutSpacesLowercase = this.allLowerCase(wordWithoutSpaces);
  let arrayOfLetters = this.splitInLetters(wordWithoutSpacesLowercase);
  let findDuplicates = arrayOfLetters.filter((item, index) => arrayOfLetters.indexOf(item) != index);
  if(findDuplicates.length > 0){
    return false;
  } else {
    return true;
  }
}



module.exports = IsogramFinder;
