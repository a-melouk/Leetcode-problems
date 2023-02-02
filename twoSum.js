let nums = [3, 2, 4]
let target = 6

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i]
    for (let j = i + 1; j < array.length; j++) {
      const element2 = array[j]
      if (element1 + element2 === target) return [i, j]
    }
  }
  return null
}

console.log(twoSum(nums, target))
