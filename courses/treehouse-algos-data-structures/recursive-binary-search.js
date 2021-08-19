const recursive_binary_search = (array, key, start = 0, end = null) => {
  if (end === null) {
    end = array.length - 1
  } 

  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);
  if (array[mid] === key) {
    return mid;
  } else {
    if (key < array[mid]) {
      return recursive_binary_search(array, key, start, mid - 1);
    } else {
      return recursive_binary_search(array, key, mid+1, end);
    }
  }
}

console.log(recursive_binary_search([1,2,3,4,5,6,7,8,9], 9))