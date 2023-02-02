function factorial(n) {
  let result = 1
  if (n < 0) return 'Error'
  for (let i = 1; i <= n; i++) result = result * i
  return result
}

function handshake(n) {
  // Write your code here
  if (n === 1) return 0
  return factorial(n) / (2 * factorial(n - 2))
}

console.log(handshake(6))
