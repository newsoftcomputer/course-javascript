
let nums = [2, 7, 11, 15]
let target = 9

var twoSum = function(nums= [2, 7, 11, 15], target = 9) {
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
  
      // If the difference is in the hashmap, return the indices.
      if (diff in hashmap) { // or, hashmap[diff] !== undefined
        return [hashmap[diff], i];
      }
  
      // Otherwise, add the current number to the hashmap.
      hashmap[nums[i]] = i;
    }
  
    return [];
  };

  console.log(twoSum())