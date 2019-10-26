"use strict";

function createBase(baseNum) {
 return function addNumber(addedNum) {
    console.log(baseNum + addedNum);
  };
	
}

const addSix = createBase(6);
addSix(9);
addSix(18);
addSix(30);