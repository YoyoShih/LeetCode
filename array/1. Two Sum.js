// Best
var twoSum = function(nums, target) {
    let result = {}
    for(let i=0;i<nums.length;i++){
        if (result[nums[i]] >= 0) {
            return [result[nums[i]], i]
        }
        result[target-nums[i]] = i
    }
};

//  2021/04/13 My solve
//  speed: 3, memo: 2, clean: 0
var twoSum = function(nums, target) {
    let gap_value = [], result = []
    for(let i=0;i<nums.length;i++){
        gap_value.push(target-nums[i])
    }
    for(let i=0;i<nums.length;i++){
        if(gap_value.includes(nums[i]) && gap_value.indexOf(nums[i]) !== i){
            result.push(gap_value.indexOf(nums[i]),i)
            return result
        }
    }
};

//  speed: 3, memo: 2, clean: 1
var twoSum = function(nums, target) {
    let gap_value = [], result = []
    for(let i=0;i<nums.length;i++){
        gap_value.push(target - nums[i])
        for(let i=0;i<nums.length;i++){
        if(gap_value.includes(nums[i]) && gap_value.indexOf(nums[i]) !== i){
            result.push(gap_value.indexOf(nums[i]),i)
            return result
        }
    }
    }
};

//  speed: 3, memo: 3, clean: 3
var twoSum = function(nums, target) {
    let result = []
    for(let i=0;i<nums.length;i++){
        if(nums.includes(target-nums[i]) && nums.indexOf(target-nums[i]) !== i){
            result.push(nums.indexOf(target-nums[i]), i)
            return result
        }
    }
};

//  Other people's solve
//  using map   ***BEST***
//  speed: 3, memo: 3, clean: 4
var twoSum = function(nums, target) {
    let result = {}
    for(let i=0;i<nums.length;i++){
        if (result[nums[i]] >= 0) {
            return [result[nums[i]], i]
        }
        result[target-nums[i]] = i
    }
};