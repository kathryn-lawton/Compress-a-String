"use strict"

//loop through string
//compare the current and next char
//Iif char !=
//Then increment the count by 1 and do string concant


function findDuplicateCharacters(input) {
  // Split the string and count the occurrences of each character
  var count = input.split('').reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1;
    return countMap;
  }, {});

  // Get the letters that were found, and filter out any that only appear once.
  var matches = Object.keys(count)
    .filter(function (key) { return (count[key] > 1); })
    // Then map it and create a string with the correct length, filled with that letter.
    .map(function (key) {
      return new Array(count[key] + 1).join(key);
    });

  return matches;
}

var results = ['aaaaaaaaaaaaaaaaaabbbccd'].map(findDuplicateCharacters);

document.getElementById("results").innerHTML = results.join('<br />');