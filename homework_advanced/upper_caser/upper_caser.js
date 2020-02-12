const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  const results = this.words.map(word => word.toUpperCase());
  return results;
}

module.exports = UpperCaser;




module.exports = UpperCaser;
