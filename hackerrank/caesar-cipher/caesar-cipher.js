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
    if (stringArr[i].match(regex)) {
      console.log(s.charCodeAt(i))
      let letterCode = s.charCodeAt(i);
      if (letterCode === zCode) {

      } else if (letterCode === ZCode) {

      } else {
        arr.push(String.fromCharCode(letterCode + k))
      }
    } else {
      arr.push(stringArr[i])
    }
  }


  console.log(arr.join(''))

}

caesarCipher('middle-Outz', 2)