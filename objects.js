"use strict";


// 1. countWords
function countWords(phrase) {
  let wordsArray = phrase.split(' ');
    console.log(wordsArray);
  let wordCount = {};
  for(let i = 0; i < wordsArray.length; i ++){
    let word = wordsArray[i]
      if (wordCount[word] === undefined){
        wordCount[word] = 1;
      } else {
        wordCount[word] += 1;
      }
  }
  return wordCount;
}

console.log(countWords('I like to code and I ike code'))


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
