'use strict'


const myNumbers = [1, 2, 3, 4];

  function doubleEvenNumbers(myNumbers) {

    const filterdNumbers = myNumbers.filter(number => number % 2 === 0); // Get the even numbers with filter method.
	const doubledEven=filterdNumbers.map(number => number * 2); //apply multiplication on every even number in the array using map method.
    return doubledEven;
  };
  console.log(doubleEvenNumbers(myNumbers));

