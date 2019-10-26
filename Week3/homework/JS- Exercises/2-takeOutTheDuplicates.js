'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(letters) {
  let unique = {};
  letters.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}
removeDuplicates(letters); // Outputs ['a', 'b', 'c', 'd', 'e', 'f'];