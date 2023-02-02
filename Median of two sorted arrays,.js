let nums1 = [1, 2],
  nums2 = [3, 4]

function medianOfTwoSortedArrays(nums1, nums2) {
  let merged = [...nums1, ...nums2]
  merged = merged.sort((a, b) => a - b)
  if (merged.length % 2 === 0) return (merged[merged.length / 2 - 1] + merged[merged.length / 2]) / 2
  else return merged[(merged.length - 1) / 2]
}

console.log(medianOfTwoSortedArrays(nums1, nums2))
