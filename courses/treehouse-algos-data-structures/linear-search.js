const linearSearch = (array, key) => {
  let result = -1;
  array.forEach((item) => {
    if (item === key) {
      result = 1;
    }
  });
  return result;
};

console.log(linearSearch([3,4,5,76,43,2], 2));