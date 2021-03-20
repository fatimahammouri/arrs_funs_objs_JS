"use strict";


// 1. printIndices
function printIndices(items) {
  for(let i = 0; i < items.length; i++){
    console.log(`${items[i]} ${i}`);
  }
}
printIndices(['apple', 'berry', 'banana'])

// 2. everyOtherItem
function everyOtherItem(items) {
  let result = []
  for (let i = 0; i < items.length; i += 2){
    result.push(items[i])
  }

  return result
}
console.log(everyOtherItem(['apple', 'berry', 'banana', 'melon', 'cherry']))


// 3. smallestNItems
function smallestNItems(items, n) {
}
