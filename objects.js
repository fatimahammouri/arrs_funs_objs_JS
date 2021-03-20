"use strict";


// 1. countWords
// Return a dictionary of each word and the no. of times they appear.

// You can assume that `phrase` does not contain any punctuation and that
//  each word is separated with a space.

// Arguments:
//   phrase (str): A string of space-separated words

// Returns:
//  dict: {word: # of times word appears in `phrase`}
   
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
/*
Return the list of melons that cost `price`.
Arguments:
    price (float)
Returns:
    list: List of melons that cost `price`
    None: If there are no melons that cost `price`
*/ 

function getMelonsAtPrice(price) {
  let melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };
  if(melon_prices[price] !== undefined){
    return melon_prices[price].sort()
  }
}
console.log(getMelonsAtPrice(2.50))
console.log(getMelonsAtPrice(5))

