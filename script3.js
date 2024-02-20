//100 Tasks challenge

/*1.Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).Specifically, ans is the concatenation of two nums arrays.Return the array ans. */
const getConcatenation = function (nums) {
  let ans = [];
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i]);
  }
  return (newArr = nums.concat(ans));
};

console.log(getConcatenation([1, 2, 1])); //[1, 2, 1, 1, 2, 1]-DONE

/*2.Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.*/
const twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (num in hash) {
      return [hash[num], i];
    }
    hash[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1] - DONE

/*3.Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.Assume the environment does not allow you to store 64-bit integers (signed or unsigned).*/
const reverse = function (x) {
  let num = x.toString().split("").reverse().join("");
  return +num;
};

console.log(reverse(123)); //321 - DONE
console.log(reverse(-123)); // -??
console.log(reverse(21)); //12 - DONE

//4.Given an integer x, return true if x is a palindrome, and false otherwise.
const isPalindrome = function (x) {
  let num = x.toString().split("").reverse().join("");
  let result = +num;
  return x === result;
};

console.log(isPalindrome(121)); //true - DONE
console.log(isPalindrome(-121)); //false - DONE
// console.log(isPalindrome(10));//false - DONE

/*5.You are given the heads of two sorted linked lists list1 and list2.Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.Return the head of the merged linked list.*/
const mergeTwoLists = function (list1, list2) {
  let newArr = list1.concat(list2).sort();
  return newArr;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1, 1, 2, 3, 4, 4] -DONE
console.log(mergeTwoLists([], [])); // [] -DONE

/*6.Given an array nums of size n, return the majority element.The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.*/
const majorityElement = function (nums) {
  //TASK:The majority element is the element that appears more than ⌊n / 2⌋
  let medianLength = Math.floor(nums.length /2)
  let n = 0
  for(let num of nums){
    // MDN:It only expects the this value to have a length property and integer-keyed properties.
    if(nums.includes(num, medianLength)){
      n = num 
    }
  }
  return n;
};

console.log(majorityElement([3, 2, 3])); //3 - DONE
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2-DONE

/*7.Given two strings s and t, return true if t is an anagram of s, and false otherwise.An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.*/
const isAnagram = function(s, t) {
    let s2 = s.split("").sort().join("")
    let t2 = t.split("").sort().join("")

    return s2 === t2
};

console.log(isAnagram("anagram","nagaram"))//true - DONE
console.log(isAnagram("rat","car"))//false - DONE

/*8.You are climbing a staircase. It takes n steps to reach the top.Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?*/
const climbStairs = function(n) {
  return n ===1 ? 1 : 1 + climbStairs(n-1)
};

console.log(climbStairs(2))//2 - DONE
console.log(climbStairs(3))//3 - DONE

/*9.Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.*/
const strStr = function(haystack, needle) {
    return haystack.indexOf(needle)   
};

console.log(strStr( "sadbutsad", "sad"))//0 - DONE
console.log(strStr( "leetcode", "leeto"))//-1-DONE

/*10.Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.*/
const removeDuplicates = function(nums) {
    const uniqNums = new Set(nums)
    console.log(uniqNums)
    return Array.from(uniqNums)
};

console.log(removeDuplicates([1,1,2]))//[1, 2] -DONE
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))//[0, 1, 2, 3, 4] - DONE

/*11.Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".*/
const longestCommonPrefix = function(strs) {
  strs.sort()
  const minLine = Math.min(strs[0].length, strs[strs.length-1].length)
  let i = 0
  while(i<minLine && strs[0][i] === strs[strs.length-1][i]){
      i++
  }
  return strs[0].substring(0,i)
}

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))//fl - DONE
let strs1 = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs1))// "" - DONE

/*12.The judge will test your solution with the following code.If all assertions pass, then your solution will be accepted.*/
const removeElement = function(nums, val) {
    for(let i =0; i <nums.length; i++){
      if(nums[i]===val){
        nums.splice(i,1)
        //сдвиг назад без пропусков
        i--
      }
    }
    return nums.length
};

let nums = [3,2,2,3] 
let val = 3
console.log(removeElement(nums,val))//2 -DONE

let nums1 = [0,1,2,2,3,0,4,2] 
let val1 = 2
console.log(removeElement(nums1,val1))// 5 - DONE




