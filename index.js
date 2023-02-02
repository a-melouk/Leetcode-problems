let numberOfMovements = 5

let bottle4 = {
  name: 'bottle4',
  contains: 3,
  capacity: 4
}

let bottle7 = {
  name: 'bottle7',
  contains: 0,
  capacity: 7
}

let bottle10 = {
  name: 'bottle10',
  contains: 0,
  capacity: 10
}
let solution = {
  contains: 1,
  bottle: bottle10
}

let movement = (source, target) => {
  if (source.contains > target.capacity - target.contains) {
    let temp = target.contains
    target.contains = target.capacity
    source.contains = source.contains - (target.capacity - temp)
  } else {
    target.contains = target.contains + source.contains
    source.contains = 0
  }
}

let empty = bottle => {
  bottle.contains = 0
}

let fill = bottle => {
  bottle.contains = bottle.capacity
}

// console.log(bottle4, bottle7, bottle10)
// fill(bottle4)
// movement(bottle4, bottle7)
// fill(bottle4)
// movement(bottle4, bottle7)
// console.log(bottle4, bottle7, bottle10)

let testIfPositive = (operation, array, value) => {
  if (eval(operation) === value)
    array.push({
      operation: operation,
      value: eval(operation)
    })
}

let newOperation = operation => {}
let values = [0, 1, 2, 3, 4, 5]

let add = '+'
let sub = '-'
let multiply = '*'
let divide = '/'

let operations = [add, sub]
let temp1 = []

let usernames = 10
let b = 9
let c = 5
let numbers = [usernames, b, c]
let value = 7
let movements = 8
let possibilities = []

for (let i = 0; i < values.length; i++) {
  for (let j = 0; j < values.length; j++) {
    for (let k = 0; k < values.length; k++) {
      if (values[i] + values[j] + values[k] < movements) {
        possibilities.push(usernames + multiply + values[i] + add + b + multiply + values[j] + add + c + multiply + values[k])
        possibilities.push(usernames + multiply + values[i] + add + b + multiply + values[j] + sub + c + multiply + values[k])
        possibilities.push(usernames + multiply + values[i] + add + c + multiply + values[j] + add + b + multiply + values[k])
        possibilities.push(usernames + multiply + values[i] + add + c + multiply + values[j] + sub + b + multiply + values[k])

        possibilities.push(usernames + multiply + values[i] + sub + b + multiply + values[j] + add + c + multiply + values[k])
        possibilities.push(usernames + multiply + values[i] + sub + b + multiply + values[j] + sub + c + multiply + values[k])
        possibilities.push(usernames + multiply + values[i] + sub + c + multiply + values[j] + add + b + multiply + values[k])
        possibilities.push(usernames + multiply + values[i] + sub + c + multiply + values[j] + sub + b + multiply + values[k])

        possibilities.push(b + multiply + values[i] + add + usernames + multiply + values[j] + add + c + multiply + values[k])
        possibilities.push(b + multiply + values[i] + add + usernames + multiply + values[j] + sub + c + multiply + values[k])
        possibilities.push(b + multiply + values[i] + add + c + multiply + values[j] + add + usernames + multiply + values[k])
        possibilities.push(b + multiply + values[i] + add + c + multiply + values[j] + sub + usernames + multiply + values[k])

        possibilities.push(b + multiply + values[i] + sub + usernames + multiply + values[j] + add + c + multiply + values[k])
        possibilities.push(b + multiply + values[i] + sub + usernames + multiply + values[j] + sub + c + multiply + values[k])
        possibilities.push(b + multiply + values[i] + sub + c + multiply + values[j] + add + usernames + multiply + values[k])
        possibilities.push(b + multiply + values[i] + sub + c + multiply + values[j] + sub + usernames + multiply + values[k])

        possibilities.push(c + multiply + values[i] + add + usernames + multiply + values[j] + add + b + multiply + values[k])
        possibilities.push(c + multiply + values[i] + add + usernames + multiply + values[j] + sub + b + multiply + values[k])
        possibilities.push(c + multiply + values[i] + add + b + multiply + values[j] + add + usernames + multiply + values[k])
        possibilities.push(c + multiply + values[i] + add + b + multiply + values[j] + sub + usernames + multiply + values[k])

        possibilities.push(c + multiply + values[i] + sub + usernames + multiply + values[j] + add + b + multiply + values[k])
        possibilities.push(c + multiply + values[i] + sub + usernames + multiply + values[j] + sub + b + multiply + values[k])
        possibilities.push(c + multiply + values[i] + sub + b + multiply + values[j] + add + usernames + multiply + values[k])
        possibilities.push(c + multiply + values[i] + sub + b + multiply + values[j] + sub + usernames + multiply + values[k])
      }
    }
  }
}

// possibilities.push(a + multiply + values[i] + add + b + multiply + values[j] + add + c + multiply + values[k])

for (let i = 0; i < possibilities.length; i++) testIfPositive(possibilities[i], temp1, value)
console.table(temp1)

for (let i = 0; i < numbers.length; i++) {
  for (let n = 0; n < values.length; n++) {
    let first = numbers[i] + multiply + values[n]
    let second = numbers[i + 1] + multiply + values[n + 1]
    let third = numbers[i + 2] + multiply + values[n + 2]
  }
}
