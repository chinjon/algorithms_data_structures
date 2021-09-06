const testCase = [1,2,3,4,5];

const findMinMaxSum = (arr) => {
  const sortedArr = arr.sort((a,b) => a-b)
  
  const min = sortedArr.slice(0, sortedArr.length -1).reduce((a, b) => a + b);
  const max = sortedArr.slice(1, sortedArr.length).reduce((a, b)=> a+ b);
  
  return `${min} ${max}`
}
