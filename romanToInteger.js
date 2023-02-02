/*
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/
function romanToInteger(s) {
  let result = 0
  while (s.length > 0) {
    if (s[0] === 'M') {
      result += 1000
      s = s.replace('M', '')
    } else if (s[0] + s[1] == 'CM') {
      result += 900
      s = s.replace('CM', '')
    } else if (s[0] === 'D') {
      result += 500
      s = s.replace('D', '')
    } else if (s[0] + s[1] === 'CD') {
      result += 400
      s = s.replace('CD', '')
    } else if (s[0] === 'C') {
      result += 100
      s = s.replace('C', '')
    } else if (s[0] + s[1] === 'XC') {
      result += 90
      s = s.replace('XC', '')
    } else if (s[0] === 'L') {
      result += 50
      s = s.replace('L', '')
    } else if (s[0] + s[1] === 'XL') {
      result += 40
      s = s.replace('XL', '')
    } else if (s[0] === 'X') {
      result += 10
      s = s.replace('X', '')
    } else if (s[0] + s[1] === 'IX') {
      result += 9
      s = s.replace('IX', '')
    } else if (s[0] === 'V') {
      result += 5
      s = s.replace('V', '')
    } else if (s[0] + s[1] === 'IV') {
      result += 4
      s = s.replace('IV', '')
    } else if (s[0] === 'I') {
      result += 1
      s = s.replace('I', '')
    }
  }
  return result
}

let a = 'MMCDLXXXVI'
console.log(romanToInteger(a))
