// Best
var twoSum = function(nums, target) {
    const m = new Map()
    let result
    nums.forEach((item, index) => {
        let indValue = target - item
        if(m.has(indValue)){
            result = [m.get(indValue), index]
        }
        m.set(item, index)
    })
    return result
};

//  2021/04/13 My solve
//  speed: 3, memo: 2, clean: 1
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
    const m = new Map()
    let result
    nums.forEach((item, index) => {
        let indValue = target - item
        if(m.has(indValue)){
            result = [m.get(indValue), index]
        }
        m.set(item, index)
    })
    return result
};

//  using typeof/hasOwnProperty for obj
//  speed: 3, memo: 3, clean: 4
var twoSum = function(nums, target) {
    const map = {}
    let result
    nums.forEach((item, index) => {
        let indValue = target - item
        // or if(map.hasOwnProperty(indValue))
        if (typeof map[indValue] !== 'undefined') {
            result = [map[indValue], index]
        }
        map[item] = index
    })
    return result
};