function occurrences(text, word) {
  const gotText = text.toLowerCase();
  const gotWord = word.toLowerCase();
  const textArray = gotText.split(' ');
  let counterForWord = 0;

  textArray.forEach((elem) => {
    if (elem === gotWord) {
      counterForWord += 1;
    }
  });
  return counterForWord;
}

console.log(occurrences("this is so Super Super cool", "super"));
module.exports = occurrences;
