// Best
var lengthOfLongestSubstring = function(s) {
    let letters = new Map()
    let highestLength = 0
    let length = 0
    for(i = 0; i < s.length; i++) {
        if(letters.get(s[i]) !== undefined && letters.get(s[i]) >= i - length) {    //  ex."abkdfgba", when getting the second a, length shuldn't update since length head has already slide to second b
            length = i - letters.get(s[i])  //  update cumulated length
        } else {
            length++
        }
        letters.set(s[i], i)
        highestLength = Math.max(highestLength, length)
    }
    return highestLength
};

//  2021/04/13 My solve
//  I didn't figure out a solution
//  try to use recursive but failed

//  Other people's solve
//  using map   ***BEST***
//  key point: the first if station in the for loop
//  speed: 5, memo: 5, clean: 5
var lengthOfLongestSubstring = function(s) {
    let letters = new Map()
    let highestLength = 0
    let length = 0
    for(i = 0; i < s.length; i++) {
        if(letters.get(s[i]) !== undefined && letters.get(s[i]) >= i - length) {    //  ex."abkdfgba", when getting the second a, length shuldn't update since length head has already slide to second b
            length = i - letters.get(s[i])  //  update cumulated length
        } else {
            length++
        }
        letters.set(s[i], i)
        highestLength = Math.max(highestLength, length)
    }
    return highestLength
};

//  using recursive
//  key point: the action in the if station in the for loop
//  speed: 1, memo: 1, clean: 1
var max = 0
var lengthOfLongestSubstring = function(s) {
    max = 0 //  when using global var, remember renew the var
    if(s.length <= 1) return s.length
    lenOfLongestSub(s)
    return max
};

var lenOfLongestSub = function(s){
    let map = new Map()
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            max = Math.max(max, i)  //  ex."pwabcdec", will end when reach second c, but "pwab" should be calc
            lenOfLongestSub(s.substring(1))
            return
        }
        map.set(s[i], i)
    }
    max = Math.max(max, s.length)
    return
}