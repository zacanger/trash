// with a loop
function doubleThings(nums){
  let res = []
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i] * 2)
  }
  return res
}

// with map
const doubleBetter = nums => nums.map(i => i * 2)

