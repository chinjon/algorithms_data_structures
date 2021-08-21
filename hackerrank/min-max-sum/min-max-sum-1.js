
function miniMaxSum(arr) {
  const vals = [];
  for(let i = 0; i < arr.length; i++) {
    let val = 0;
    for(let e = 0; e < arr.length; e++) {
      if (e !== i) {
        val += arr[e];
      }
    }
    vals.push(val);
  }
  return `${Math.min(...vals)} ${Math.max(...vals)}`;
}

console.log(miniMaxSum([1,2,3,4,5]))