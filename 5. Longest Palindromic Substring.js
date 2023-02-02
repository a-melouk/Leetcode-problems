process.stdout.write('\x1Bc')
function occurenceOfLetter(string, letter) {
  let result = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) result++
  }
  return result
}
function longestWord(words) {
  let longestWord = words[0]
  for (let i = 0; i < words.length; i++) if (words[i].length > longestWord.length) longestWord = words[i]
  return longestWord
}

function splitWord(word) {
  if (word.length === 1) return { firstHalf: word }
  let firstHalf = '',
    secondHalf = ''
  if (word.length % 2 === 0) {
    firstHalf = word.slice(0, word.length / 2)
    secondHalf = word.slice(word.length / 2)
  } else {
    firstHalf = word.slice(0, Math.floor(word.length / 2))
    secondHalf = word.slice(Math.ceil(word.length / 2))
  }
  return { firstHalf, secondHalf }
}

let s = 'uhrfjotnewtodhmbplsaolnpcdaohiytmfllukijouxipvqohtsgxbtfoxyfkfczkfwhzimbefiohmtimrcxbpgcxogystdkcqujvbxsgirpccdnvejtljftwkdpsqpflzwruwwdzovsbmwbcvlftkjnxqaguvtsycylqzquqkbnybnbaeahbxejhphwrpmymcemuhljwtuvxefqfzjhskuqhifydkxpnfwfxkpeexnjltfqwfvchphmtsrsyayxukvmlqodshqwbeaxhcxdbssnrdzvxtusngwqdxvluauphmmbwmgtazjwvolenegwbmjfwprfuswamyvgrgshqocnhirgyakbkkggviorawadzhjipjjgiwpelwxvtaegauerbwpalofrbghfhnublttqtcmqskcocwwwxpnckrnbepusjyohsrretrqyvgnbezuvwmzizcefxyumtdwnqjkgsktyuacfpnqocqjxcurmipjfqmjqrkdeqsfseyigqlwmzgqhivbqalcxhlzgtsfjbdbfqiedogrqasgmimifdexbjjpfusxsypxobxjtcwxnkpgkdpgskgkvezkriixpxkkattyplnpdbdifforxozfngmlgcunbnubzamgkkfbswuqfqrvzjqmlfqxeqpjaqayodtetsecmfbplscmslpqiyhhykftzkkhshxqvdwmwowokpluwyvavwvofwqtdilwqjgrprukzyhckuspyzaoe'

var longestPalindrome = function (s) {
  let word = s
  let candidates = []
  let count = 0
  if (s.length > 1) {
    let first = splitWord(s).firstHalf
    let second = splitWord(s).secondHalf.split('').reverse().join('')
    if (first === second) return s
  }
  while (word.length > 0) {
    console.log(word + '\n')
    if (occurenceOfLetter(word, word[0]) <= 1) {
      if (word.length === 1) candidates.push(word)
      console.log(word)
      count++
      console.log(word, 'Occurence of letter ' + word[0] + ' <= 1 \n')
      word = s.substring(count)
    } else {
      console.log('Occurence >= 2', word)
      let firstHalf = ''
      let secondHalf = ''
      while (word.length > 1) {
        if (occurenceOfLetter(word, word[0]) <= 1) {
          console.log(word)
          count++
          console.log(word, 'Occurence of letter ' + word[0] + ' <= 1 \n')
          word = s.substring(count)
        } else {
          if (word[0] !== word[word.length - 1]) {
            console.log(word, 'Different start and end, next try is ' + word.substring(0, word.length - 1))
            word = word.substring(0, word.length - 1)
          } else {
            firstHalf = splitWord(word).firstHalf
            secondHalf = splitWord(word).secondHalf
            if (secondHalf.split('').reverse().join('') === firstHalf) {
              console.log('Found a palindrome: ', word)
              candidates.push(word)
              // word = word.substring(0, word.length - 1)
              word = s[0]
              break
            } else {
              console.log(word, 'Different first and second half, next try is: ' + word.substring(0, word.length - 1))
              word = word.substring(0, word.length - 1)
            }
          }
        }
      }
    }
    // if (candidates.length === 0) {
    //   console.log(count)
    //   word = s.substring(count)
    //   count++
    //   console.log(5, word)
    // }
  }
  return longestWord(candidates)
}

console.log(longestPalindrome(s))
// console.log(65465)

/*
Use firstIndex and last Index

CDZABABADZX
STOP Because there's only one C. Palindrome can't start with C

DZABA BADZX   //delete last letter without comparing
DZAB A BADZ   //delete last letter without comparing
DZAB ABAD     //compare 1st and 2nd half, delete last letter
DZA B ABA     //delete last letter without comparing
STOP Because there's only one D. Palindrome can't start with D

ZABA B ADZX   //delete last letter without comparing
ZABA BADZ     
ZAB A BAD
STOP Because there's only one Z. Palindrome can't start with D

ABAB ADZX     //delete last letter without comparing
ABA B ADZ     //compare 1st and 2nd half, delete last letter
ABA BAD       //delete last letter without comparing
AB A BA
Palindrome!!!!
ABCXBA

ABC
*/
// firstHalf = s.slice(0, Math.floor(s.length / 2))
// secondHalf = s.slice(Math.ceil(s.length / 2))
// middle = s[Math.floor(s.length / 2)]
// console.log(firstHalf, middle, secondHalf)

// let s = 'aacabdkacaa'
/*
AACABDDBKCAA
AACABD DBKCAA
AACAB D DBKCA
AACAB DDBKC
AACA B DDBK
AACA BDDB
AAC A BDD
AAC ABD
AA C AB
AA CA
A A C
AA
Palindrome

ACABDDBKCAA
ACABD D BKCAA
ACABD DBKCA
ACAB D DBKC
ACAB DDBK
ACA B DDB
ACA BDD
AC A BD
AC AB
A C A
Palindrome

*/
