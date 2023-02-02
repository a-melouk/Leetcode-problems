let l1 = [9, 9, 9, 9, 9, 9, 9]
let l2 = [9, 9, 9, 9]
/*
let l1 = [9, 9, 9, 9, 9, 9, 9]
let l2 = [0, 0, 0, 9, 9, 9, 9]
*/

//3 4 2
//4 6 5

function addTwoNumbers(l1, l2) {
  let result = []
  l1 = l1.reverse()
  l2 = l2.reverse()
  l1 = l1.join('')
  l2 = l2.join('')
  let temp = parseInt(l1) + parseInt(l2)
  temp = temp.toString()
  for (let i = 0; i < temp.length; i++) result[i] = temp[i]

  return result
}
console.log(l1.reverse())
console.log(l2.reverse())
console.log(addTwoNumbers(l1, l2))
