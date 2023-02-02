let test = ['abcabcbb', 'bbbbb', 'pwwkew', ' ', 'dvdf']

function longestWord(words) {
  let maxLength = 0
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) maxLength = words[i].length
  }
  return maxLength
}

function longestSubstringWithoutRepeat(s) {
  let candidates = []
  let word = ''
  for (let i = 0; i < s.length; i++) {
    if (!word.includes(s[i])) word += s[i]
    else {
      if (!candidates.includes(word) && word.length > longestWord(candidates)) candidates.push(word)
      word = word.substring(word.indexOf(s[i]) + 1, i)
      word += s[i]
    }
    if (!candidates.includes(word) && word.length > longestWord(candidates)) candidates.push(word)
  }
  return longestWord(candidates)
}
for (let i = 0; i < test.length; i++) console.log(longestSubstringWithoutRepeat(test[i]))
