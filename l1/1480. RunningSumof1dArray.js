// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = nums => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j <= i; j++) {
      sum += nums[j];
    }
    result = [...result, sum]
  }
  return result;
};

console.log(runningSum([1, 2, 3, 4]));

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

console.log(runningSum([1,1,1,1,1]));

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

console.log(runningSum([3,1,2,10,1]));

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]