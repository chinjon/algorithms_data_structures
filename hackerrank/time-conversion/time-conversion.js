function timeConversion(s) {
  // Write your code here
  const amPm = s.slice(s.length - 2, s.length);
  const splitTime = s.slice(0, s.length - 2).split(':');

  if (amPm.toLowerCase() === 'am' && splitTime[0] === '12') {
    splitTime[0] = '00';
    return splitTime.join(':');
  } else if (amPm.toLowerCase() === 'pm' && splitTime[0] !== '12') {
    splitTime[0] = parseInt(splitTime[0]) + 12;
    return splitTime.join(':');
  } else {
    return splitTime.join(':');
  }
};

console.log(timeConversion('7:35:00PM'))
console.log(timeConversion('12:35:00PM'))