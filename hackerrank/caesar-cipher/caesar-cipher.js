function caesarCipher(s, k) {
  // s = string
  // k = num of letters
  const arr = [];
  const stringArr = s.split('');
  const regex = /^[a-zA-Z]*$/;
  
  const aCode = 97;
  const ACode = 65;

  const zCode = 122;
  const ZCode = 90;


  for (let i = 0; i < stringArr.length; i++) {
    const letterCode = stringArr[i].charCodeAt(0)
    if (stringArr[i].match(regex)) {
      if(stringArr[i] === stringArr[i].toUpperCase()) {
        if(letterCode===ZCode) {

          arr.push(String.fromCharCode(ACode + k - 1));
        } else if (letterCode + k > ZCode) {
          arr.push(String.fromCharCode(((letterCode + k) - ZCode) + ACode - 1));
        } else {
          arr.push(String.fromCharCode(letterCode + k));
        }
      } else {
        if (letterCode === zCode) {
          arr.push(String.fromCharCode(aCode + k - 1))
        } else if (letterCode + k > zCode) {
          arr.push(String.fromCharCode(((letterCode + k) - zCode) + aCode - 1));
        } else {
          arr.push(String.fromCharCode(letterCode + k))
        }
      }
    } else {
      arr.push(stringArr[i])
    }
  }


  return(arr.join(''))

}

console.log(caesarCipher('middle-Outz', 2))