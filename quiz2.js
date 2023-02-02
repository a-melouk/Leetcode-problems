/*
 * Complete the 'findSum' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY numbers
 *  2. 2D_INTEGER_ARRAY queries
 */

let array = [-5, 0]
let q = 2
let query1 = [2, 2, 20]
let query2 = [1, 2, 10]
let queries = [query1, query2]
function countOfZero(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) if (array[i] === 0) sum++
  return sum
}

function findSum(numbers, queries) {
  let result = []

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i]
    let copy = numbers.slice(query[0] - 1, query[1])
    let L = query[0]
    let R = query[1]
    let X = query[2]
    let zeros = countOfZero(copy)
    let sum = 0
    for (let i = 0; i < copy.length; i++) sum += copy[i]
    if (zeros > 0) sum = sum + X * zeros
    result.push(sum)
  }

  return result
}

console.log(findSum(array, queries))
// console.log(findSum(array, query2))
// console.table(query1.slice())
