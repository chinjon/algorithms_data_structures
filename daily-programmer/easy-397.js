// https://www.reddit.com/r/dailyprogrammer/comments/oe9qnb/20210705_challenge_397_easy_roman_numeral/

/**
numcompare("I", "I") => false
numcompare("I", "II") => true
numcompare("II", "I") => false
numcompare("V", "IIII") => false
numcompare("MDCLXV", "MDCLXVI") => true
numcompare("MM", "MDCCCCLXXXXVIIII") => false
*/

const romanNumeralValueMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

/**
 * @description Function to deconstruct roman numeral
 * @param {String} value - roman numerical value
 * @returns {Object<Array>}
 */
const splitRomanNumeral = (value) => {
  return value.split('');
}

/**
 * @description Function to map out occurrences of a string within an array
 * 
 * Array must be split
 * @param {Object<Array>} arr 
 * @returns {Object}
 */
const countOccurrences = (arr) => {
  const results = {};

  for (let i = 0; i < arr.length; i++) {
    if (!results.hasOwnProperty(arr[i])) {
      results[arr[i]] = 1;
    } else {
      results[arr[i]]++;
    }
  }

  return results;
}

/**
 * @description Function to add up roman numeral to convert to numeric value
 * @param {Object} numeralMapObj 
 * @returns {Number}
 */
const calculateRomanNumeralMap = (numeralMapObj) => {
  let counter = 0;
  for (const numeral in numeralMapObj) {
    counter += (romanNumeralValueMap[numeral] * numeralMapObj[numeral])
  }
  return counter;
}

/**
 * @description Function for comparing two roman numerals
 * @param {String} a 
 * @param {String} b 
 * @returns {Boolean} 
 */
const numCompare = (a, b) => {
  return calculateRomanNumeralMap(countOccurrences(splitRomanNumeral(a))) < calculateRomanNumeralMap(countOccurrences(splitRomanNumeral(b)))
}

console.log(numCompare("I", "II"));
console.log(numCompare("MM", "MDCCCCLXXXXVIIII"));
console.log(numCompare("I", "I"));