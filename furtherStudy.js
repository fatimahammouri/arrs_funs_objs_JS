"use strict";


function wordsInCommon(words1, words2) {
  let wordsSet1 = new Set(words1);
  let wordsSet2 = new Set(words2);
  let result = new Set();
  for(const word of wordsSet1){
    if(wordsSet2.has(word)){
      result.add(word)
    }
  }
  return [result]
  
}
console.log(wordsInCommon(['a', 'b', 'c'],['a', 'b', 'b', 'd'] ))

function kidsGame(names) {
  // Replace this with your code
}
