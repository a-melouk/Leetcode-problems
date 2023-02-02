var reverse = function (x) {
  let result = 0
  if (x === 0) return parseInt(x)
  else if (x < 0) result = -parseInt((x*-1).toString().split('').reverse().join(''))
  else if (x > 0) result = parseInt(x.toString().split('').reverse().join(''))
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) return 0
  return result
}