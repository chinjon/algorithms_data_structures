const candles = [82, 49, 82, 82, 41, 82, 15, 63, 38, 25];

const tallestCandle = (arr) => {
  const tallest = Math.max(...arr);
  const tallestFreq = arr.reduce((n, val) => n + (val === tallest), 0);
  
  return arr.length - tallestFreq;
}

console.log(tallestCandle(candles))
