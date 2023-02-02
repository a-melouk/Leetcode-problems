'use strict'

let a = 'xaxaxaxa'
let b = 'zzzzzzz'
let c = 'zzzzbbbb'
let user = [a, b, c]

function possibleChanges(usernames) {
  let result = []
  // Write your code here
  for (let index = 0; index < usernames.length; index++) {
    const word = usernames[index]
    console.log(word)
    if (word.length >= 2) {
      for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) > word.charCodeAt(i + 1)) {
          result.push('YES')
          break
        }
        if (i === word.length - 1) if (word.charCodeAt(word.length - 2) <= word.charCodeAt(word.length - 1)) result.push('NO')
      }
    } else result.push('NO')
  }
  return result
}

console.log(possibleChanges(user))
