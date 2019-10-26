
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  
  while (startIndex <= stopIndex) {
    numbers.push(startIndex);
    startIndex++;
  }

  console.log(numbers);
	
  numbers.forEach(value => {
    if (value % 3 === 0 && value % 5 === 0) {
      console.log(value + sayThree() + ' and ' + value + sayFive());
    } else if (value % 3 === 0) {
      console.log(value + sayThree());
    } else if (value % 5 === 0) {
      console.log(value+ sayFive());
    }
  });
}

function sayThree() {
  return ' is divisible by 3';
}
function sayFive() {
  return ' is divisible by 5';
}
threeFive(10, 15, sayThree, sayFive);
