// Завдання 1
/*function greater (a,b,c) {
   return a < b < c;
   }*/

//Завдання 2
/*let x = 1;
let y = 2;

let res1 = x + String(y);
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + String(y);
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x+y);
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = Math.sqrt(x-y);
console.log(res4); // NaN
console.log(typeof res4); // ""number""*/

//Завдання 3
/*let isAdult = +prompt("How old are you?");
if (isAdult <= 0 || isAdult > 125 || isNaN(Number(isAdult))) {
    "Incorrect input";
} else {
    isAdult >= 18 ? "You are adult" : "You are not adult";
}*/

//Завдання 4
/*let maxIncludedValue;

function compareNumbers(a, b) {
  return a - b;
}

function inputNumbers(array) {
  let arrayCopySort = [...array].sort(compareNumbers);
  let j = 1;
  let includeArrayIndex = [];
  let includeArrayValue = [];

  for (let i = 0; i < arrayCopySort.length; i++) {
    if (arrayCopySort[i] === arrayCopySort[i + 1]) {
      j++;
    } else {
      includeArrayIndex.push(j);
      includeArrayValue.push(arrayCopySort[i]);
      j = 1;
    }
  }

  maxIncludedValue = includeArrayIndex.findIndex(item => item === Math.max(...includeArrayIndex));
  let filteredArray = array.filter((item) => item !== includeArrayValue[maxIncludedValue]);

  console.log(arrayCopySort);
  console.log(includeArrayIndex);
  console.log(includeArrayValue);
  console.log(maxIncludedValue);
  console.log(filteredArray);
}*/

//Завдання 5
/*let firstTriangleSide = +prompt("Enter triangle side AB:");
if (firstTriangleSide <= 0 || isNaN(Number(firstTriangleSide))) {
    "Incorrect input";
} else {
  let secondTriangleSide = +prompt("Enter triangle side AC:");
  if (secondTriangleSide <= 0 || isNaN(Number(secondTriangleSide))) {
    "Incorrect input";
  } else { 
    let thirdTriangleSide = +prompt("Enter triangle side BC:");
    if (thirdTriangleSide <= 0 || isNaN(Number(thirdTriangleSide))) {
      "Incorrect input";
    } else { 
      let squer = 1 / 4 * Math.sqrt((firstTriangleSide + secondTriangleSide + thirdTriangleSide) * (secondTriangleSide + thirdTriangleSide - firstTriangleSide) * (firstTriangleSide + thirdTriangleSide - secondTriangleSide) * (firstTriangleSide + secondTriangleSide - thirdTriangleSide));
      console.log(squer.toFixed(3));
      if (Math.pow(firstTriangleSide, 2) + Math.pow(secondTriangleSide, 2) === Math.pow(thirdTriangleSide, 2) || Math.pow(firstTriangleSide, 2) + Math.pow(thirdTriangleSide, 2) === Math.pow(secondTriangleSide, 2) || Math.pow(firstTriangleSide, 2) === Math.pow(secondTriangleSide, 2) + Math.pow(thirdTriangleSide, 2)) {
        console.log("Triangle is right triangle");
      } else { 
        console.log("Triangle is not a right triangle");
      }
    }
  }
}*/

//Завдання 6
/*const mathOperations = function (a, b, op) { 
  if (isNaN(Number(a)) || isNaN(Number(b)) || isNaN(Number(op))) {
    return "Incorrect input"
  } else {
    switch (op) {
      case 1: console.log(a - b);
        break;

      case 2: console.log(a * b);
        break;
      case 3: console.log(a / b);
        break;
      default: console.log(a + b);
    }
  }
}*/





