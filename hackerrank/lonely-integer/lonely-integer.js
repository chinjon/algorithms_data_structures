// Given an array of integers, where all elements but one occur twice, find the unique element. 

function lonelyinteger(a) {
  // Write your code here
  const integerMap = {};
  a.forEach((num) => {
    if (!(num in integerMap)) {
      integerMap[num] = 1;
    } else {
      integerMap[num] += 1;
    }
  });

  for (let e in integerMap) {
    if (integerMap[e] === 1) {
      return e;
    }
  }
}

console.log(lonelyinteger([1, 2, 3, 4,3, 2, 1]))