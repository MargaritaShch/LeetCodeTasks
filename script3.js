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
  return x === result ? true : false;
};

console.log(isPalindrome(121));//true - DONE
console.log(isPalindrome(-121));//false - DONE
// console.log(isPalindrome(10));//false - DONE

/*5.You are given the heads of two sorted linked lists list1 and list2.Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.Return the head of the merged linked list.*/
const mergeTwoLists = function(list1, list2) {
    let newArr = list1.concat(list2).sort()
    return newArr
};

console.log(mergeTwoLists([1,2,4],[1,3,4]))// [1, 1, 2, 3, 4, 4] -DONE
console.log(mergeTwoLists([],[]))// [] -DONE

