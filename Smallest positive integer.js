var firstMissingPositive = function (nums) {
  nums = nums.filter(a => a > 0)
  nums = [...new Set(nums)]
  nums = nums.sort((a, b) => a - b)
  if (nums.length === 0) return 1
  let max1 = Math.max(...nums)

  let array = []
  array.length = max1
  array.fill('*')
  for (let i = 0; i < nums.length; i++) array[nums[i]] = nums[i]
  array.shift()
  if (array.indexOf('*') === -1) return max1 + 1
  return array.indexOf('*') + 1
}
let nums = [1]
// let nums = [3]
// let nums = [1, 2]
// let nums = [1,4]
// let nums = [2, 3]
// let nums = [2, 4]
// let nums = [1, 2, 3]
// let nums = [1, 2, 3, 4, 5, 8]
// let nums = [2, 3, 4, 5, 8]
// let nums = [3, 4, 5, 6]
// let nums = [3, 4, 5, 8]
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]

console.log(firstMissingPositive(nums))
