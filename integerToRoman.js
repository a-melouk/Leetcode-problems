/*
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

function integerToRoman(s) {
  let result = ''
  let I = 1
  let V = 5
  let X = 10
  let L = 50
  let C = 100
  let D = 500
  let M = 1000

  let n1000 = Math.floor(s / M)
  let n500 = Math.floor((s - n1000 * M) / D)
  let n100 = Math.floor((s - n1000 * M - n500 * D) / C)
  let n50 = Math.floor((s - n1000 * M - n500 * D - n100 * C) / L)
  let n10 = Math.floor((s - n1000 * M - n500 * D - n100 * C - n50 * L) / X)
  let n5 = Math.floor((s - n1000 * M - n500 * D - n100 * C - n50 * L - n10 * X) / V)
  let n1 = s - n1000 * M - n500 * D - n100 * C - n50 * L - n10 * X - n5 * V

  for (let i = 0; i < n1000; i++) result += 'M'
  for (let i = 0; i < n500; i++) result += 'D'
  for (let i = 0; i < n100; i++) result += 'C'
  for (let i = 0; i < n50; i++) result += 'L'
  for (let i = 0; i < n10; i++) result += 'X'
  for (let i = 0; i < n5; i++) result += 'V'
  for (let i = 0; i < n1; i++) result += 'I'
  return { result, n1000, n500, n100, n50, n10, n5, n1 }
  // return result
}

console.log(integerToRoman(3))
