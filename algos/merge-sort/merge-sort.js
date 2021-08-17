const merge = (left, right) => {
  let arr = [];

  while (left.length && right.length) {
    //Find the smaller among the smallest elements of left and right subarrays
    if(left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift())
    }
  }

  return [...arr, ...left, ...right];
}

const merge_sort = (arr) => {
  const middle = arr.length/2;

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, middle);
  return merge(merge_sort(left), merge_sort(arr));
}

console.log(merge_sort([41, 18, 9, 7, 2, 11, 1, 3]))