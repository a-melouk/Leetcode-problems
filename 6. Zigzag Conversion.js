/*
Line0: (numRows - 1) * i * 2 - 0
(numRows - 1) * i * 2 + 0

Line1: 2 * (numRows - 1) * i - 1
2 * (numRows - 1) * i + 1

Line2: 2 * (numRows - 1) * i - 2
2 * (numRows - 1) * i + 2
*/
/* 
P - A - H - N
A P L S I I G
Y - I - R - -

00 -- 04 -- 08 -- 12
01 03 05 07 09 11 13
02 -- 06 -- 10 -- 14
*/

/* var convert = function (s, numRows) {
  let result = []
  let line1 = ''
  result.push(1)//lineNumber
  for (let i = 1; i <= numRows; i++) {
    result.push(2 * (numRows - 1) * i - 1)
    result.push(2 * (numRows - 1) * i + 1)
  }
  console.log(result)
  for (let i = 0; i < result.length; i++) line1 += s[result[i]]
  return line1
}
console.log(convert(s, numRows)) */

/* 
P - A - H - N
A P L S I I G
Y - I - R - -

00 -- 04 -- 08 -- 12
01 03 05 07 09 11 13
02 -- 06 -- 10 --

P - - I - - N
A - L S - I G
Y A - H R - -
P - - I - - -

00 -- -- 06 -- -- 12
01 -- 05 07 -- 11 13
02 04 -- 08 10 --
03 -- -- 09
*/
var convert = function (s, numRows) {
  let converted = ''
  if (s.length <= numRows || numRows === 1) return s
  if (numRows === 2) {
    for (let i = 0; i < s.length; i++) if (i % 2 === 0) converted += s[i]
    for (let i = 0; i < s.length; i++) if (i % 2 === 1) converted += s[i]
  } else
    for (let i = 0; i < numRows; i++) {
      let result = []
      result.push(i)
      if (numRows % 2 === 1) {
        for (let j = 1; j <= numRows; j++) {
          let a = 2 * (numRows - 1) * j - i
          let b = 2 * (numRows - 1) * j + i
          if (!result.includes(a) && a < s.length) result.push(a)
          if (!result.includes(b) && b < s.length) result.push(b)
        }
        for (let index = 0; index < result.length; index++) converted = converted += s[result[index]]
        result = []
      } else {
        for (let j = 1; j <= numRows - 1; j++) {
          let a = 2 * (numRows - 1) * j - i
          let b = 2 * (numRows - 1) * j + i
          if (!result.includes(a) && a < s.length) result.push(a)
          if (!result.includes(b) && b < s.length) result.push(b)
        }
        for (let index = 0; index < result.length; index++) converted = converted += s[result[index]]
        result = []
      }
    }
  return converted
}
/*
ACE
BD
024
13

PYAIHRN
APLSIIG
0 2 4 6 8 10 12
1 3 5 7 9 11 13
*/
let s = 'PAYPALISHIRING'
let numRows = 2
console.log(convert(s, numRows))

let result = []

//Line0
// 00 -- -- -- 08 -- -- -- 16 -- -- -- 24 -- -- -- 32
// 00 -- -- 06 -- -- 12 -- -- 18 -- -- 24 -- -- 30 -- -- 36
// for (let i = 0; i < 5; i++) result.push((numRows - 1) * i * 2)
// console.log(result)

//Line1
// 01 -- -- 07 09 -- -- 15 17 -- -- 23 25 -- -- 31 33
// 01 --    05 07 --    11 13 --    17 19 --    23 25 -- 29 31 -- 35 --
// result.push(1)
// for (let i = 1; i < 5; i++) {
//     result.push(2 * (numRows - 1) * i - 1)
//     result.push(2 * (numRows - 1) * i + 1)
// }
// console.log(result)

//Line2
// Line2 : {2 , (X-1)*i*2-2 , (X-1)*i*2+2 , (X-1)*i*2-2 , (X-1)*i*2+2 }
// 02 06 10 14 18 22 26 30 34
// 02 04 08 10 14 16 20 22 26 28 32 34
// result.push(2)
// for (let i = 1; i < 5; i++) {
//     result.push(2 * (numRows - 1) * i - 2)
//     result.push(2 * (numRows - 1) * i + 2)
// }
// console.log(result)

/*
Line0: (numRows - 1) * i * 2 - 0
       (numRows - 1) * i * 2 + 0

Line1: 2 * (numRows - 1) * i - 1
       2 * (numRows - 1) * i + 1
       
Line2: 2 * (numRows - 1) * i - 2
       2 * (numRows - 1) * i + 2
*/

/*
if numRows>=length return s

Line0 : {0, 1:(numRows-1)*i*2} i=1;i<5;i++
Line1 : {1, impaire:{2 * (numRows - 1) * i - 1,2 * (numRows - 1) * i + 1}, paire{}

Length = 36
numRows = 5
00 -- -- -- 08 -- -- -- 16 -- -- -- 24 -- -- -- 32
01 -- -- 07 09 -- -- 15 17 -- -- 23 25 -- -- 31 33
02 -- 06 -- 10 -- 14 -- 18 -- 22 -- 26 -- 30 -- 34
03 05 -- -- 11 13 -- -- 19 21 -- -- 27 29 -- -- 35
04 -- -- -- 12 -- -- -- 20 -- -- -- 28 -- -- -- 36

Length = 36
numRows = 4
00 -- -- 06 -- -- 12 -- -- 18 -- -- 24 -- -- 30 -- -- 36
01 -- 05 07 -- 11 13 -- 17 19 -- 23 25 -- 29 31 -- 35 --
02 04 -- 08 10 -- 14 16 -- 20 22 -- 26 28 -- 32 34 -- --
03 -- -- 09 -- -- 15 -- -- 21 -- -- 27 -- -- 33 -- -- --

Line0 : {(5-1)*0+0 , (5-1)*2+0 , (5-1)*4+0 , (5-1)*6+0 , (5-1)*8+0 }
Line0 : {(4-1)*0+0 , (4-1)*2+0 , (4-1)*4+0 , (4-1)*6+0 , (4-1)*8+0 }

Line1 : {(5-1)*0+1 , (5-1)*2-1 , (5-1)*2+1 , (5-1)*4-1 , (5-1)*4+1 }
Line1 : {(4-1)*0+1 , (4-1)*2-1 , (4-1)*2+1 , (4-1)*4-1 , (4-1)*4+1 }

Line2 : {(X-1)*0+2 , (X-1)*2-2 , (X-1)*3-2 , (X-1)*4-2 , (X-1)*5-2 }
Line2 : {(X-1)*0+2 , (X-1)*1+2 , (X-1)*2+2 , (X-1)*3+2 , (X-1)*4+2 }
Line2 : {(X-1)*0+2 , (X-1)*2-2 , (X-1)*2+2 , (X-1)*4-2 , (X-1)*4+2 }

Line3 : {(5-1)*0+3 , (5-1)*1+1 , (5-1)*2+3 , (5-1)*3+1 , (5-1)*4+3 }
Line4 : {(5-1)*1   , (5-1)*3   , (5-1)*5   , (5-1)*7   , (5-1)*9   }

Line0 : {4*0+0 , 4*2+0 , 4*4+0 , 4*6+0 , 4*8+0 }
Line1 : {4*0+1 , 4*2-1 , 4*2+1 , 4*4-1 , 4*4+1 }
Line2 : {4*1-2 , 4*2-2 , 4*3-2 , 4*4-2 , 4*5-2 }
Line3 : {4*0+3 , 4*1+1 , 4*2+3 , 4*3+1 , 4*4+3 }
Line4 : {4*1   , 4*3   , 4*5   , 4*7   , 4*9   }



Line2 : {(4-1)*0+2 , (4-1)*2-2 , (4-1)*2+2 , (4-1)*4-2 , (4-1)*4+2 }
Line2 : {(4-1)*0+2 , (4-1)*2-2 , (4-1)*2+2 , (4-1)*4-2 , (4-1)*4+2 }

Line3 : {(4-1)*0+3 , (4-1)*1+1 , (4-1)*2+3 , (4-1)*3+1 , (4-1)*4+3 }

01 -- -- -- 09 --
02 -- -- 08 10 --
03 -- 07 -- 11 --
04 06 -- -- 12 14
05 -- -- -- 13 --
PHASIYIRPLIGAN
P - - - H -
A - - S I -
Y - I - R -
P L - - I G
A - - - N -
*/
