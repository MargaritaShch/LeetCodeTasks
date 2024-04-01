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
  let medianLength = Math.floor(nums.length / 2);
  let n = 0;
  for (let num of nums) {
    // MDN:It only expects the this value to have a length property and integer-keyed properties.
    if (nums.includes(num, medianLength)) {
      n = num;
    }
  }
  return n;
};

console.log(majorityElement([3, 2, 3])); //3 - DONE
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2-DONE

/*7.Given two strings s and t, return true if t is an anagram of s, and false otherwise.An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.*/
const isAnagram = function (s, t) {
  let s2 = s.split("").sort().join("");
  let t2 = t.split("").sort().join("");

  return s2 === t2;
};

console.log(isAnagram("anagram", "nagaram")); //true - DONE
console.log(isAnagram("rat", "car")); //false - DONE

/*8.You are climbing a staircase. It takes n steps to reach the top.Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?*/
const climbStairs = function (n) {
  return n === 1 ? 1 : 1 + climbStairs(n - 1);
};

console.log(climbStairs(2)); //2 - DONE
console.log(climbStairs(3)); //3 - DONE

/*9.Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.*/
const strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad")); //0 - DONE
console.log(strStr("leetcode", "leeto")); //-1-DONE

/*10.Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.*/
const removeDuplicates = function (nums) {
  const uniqNums = new Set(nums);
  console.log(uniqNums);
  return Array.from(uniqNums);
};

console.log(removeDuplicates([1, 1, 2])); //[1, 2] -DONE
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //[0, 1, 2, 3, 4] - DONE

/*11.Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".*/
const longestCommonPrefix = function (strs) {
  strs.sort();
  const minLine = Math.min(strs[0].length, strs[strs.length - 1].length);
  let i = 0;
  while (i < minLine && strs[0][i] === strs[strs.length - 1][i]) {
    i++;
  }
  return strs[0].substring(0, i);
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); //fl - DONE
let strs1 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs1)); // "" - DONE

/*12.The judge will test your solution with the following code.If all assertions pass, then your solution will be accepted.*/
const removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      //сдвиг назад без пропусков
      i--;
    }
  }
  return nums.length;
};

let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val)); //2 -DONE

let nums1 = [0, 1, 2, 2, 3, 0, 4, 2];
let val1 = 2;
console.log(removeElement(nums1, val1)); // 5 - DONE

/*13.You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.Letters are case sensitive, so "a" is considered a different type of stone from "A".*/
const numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let k = 0; k < stones.length; k++) {
      if (jewels.charAt(i) === stones.charAt(k)) {
        count++;
      }
    }
  }
  return count;
};

let jewels = "aA";
let stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones)); //3 - DONE

/*14.Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/

const containsDuplicate = function (nums) {
  let uniqNum = new Set(nums);
  console.log(uniqNum);
  let newArr = Array.from(uniqNum);
  if (newArr.length === nums.length) {
    return false;
  } else {
    return true;
  }
};

console.log(containsDuplicate([1, 2, 3, 1])); //true -DONE
console.log(containsDuplicate([1, 2, 3, 4])); //false - DONE
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true - DONE

/*15.Given a string s consisting of words and spaces, return the length of the last word in the string.A word is a maximal substring consisting of non-space characters only.*/
const lengthOfLastWord = function (s) {
  let arr = s.split(" ");
  let newArr = arr.filter((word) => Math.max(word.length));
  for (let i = 0; i < newArr.length; i++) {
    result = Math.max(newArr[i].length);
  }
  return result;
};

console.log(lengthOfLastWord("Hello World")); //5 -DONE
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4-DONE
console.log(lengthOfLastWord("luffy is still joyboy")); //6 - DONE

/*16.Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.*/
const numUniqueEmails = function (emails) {
  let arr = [];
  for (let i = 0; i < emails.length; i++) {
    let exception = emails[i].includes("+");
    console.log(
      emails[i].slice(emails.indexOf(exception), emails.indexOf("@"))
    );
  }
  return arr;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);

/*17.Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.*/
const thirdMax = function (nums) {
  if (nums.length < 3) {
    return Math.max(...nums);
  }
  let newArr = nums.slice(0, 3);
  console.log(newArr);
  for (let k = 0; k < newArr.length; k++) {
    if (Math.max(newArr[k])) {
      return k + 1;
    }
  }
};

console.log(thirdMax([3, 2, 1])); //1 - DONE
console.log(thirdMax([1, 2])); //2 - DONE
console.log(thirdMax([2, 2, 3, 1])); //3 - DONE
console.log(thirdMax([1, 1, 2])); //1-??

/*18.A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.*/
const sortSentence = function (s) {
  let arr = s.split(" ");
  let newArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split("").reverse().join(""));
    let arr1 = newArr.sort();

    for (let k = 0; k < arr1.length; k++) {
      result.push(arr1[k].split("").join(""));
      let arr2 = result.sort();
      console.log(arr2);
    }
  }
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));

//*19.Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well. */
const deleteDuplicates = function (head) {
  let cur = head;
  //пока текущий и следующий узлы есть
  while (cur && cur.next) {
    //если значение текущего и следующего узла равны
    if (cur.val === cur.next.val) {
      //пропускаем узел приравнивая текущий и следующий друг к другу
      cur.next = cur.next.next;
    } else {
      //если нет записываем след узел
      cur = cur.next;
    }
  }
  return head;
};
console.log(deleteDuplicates([1, 1, 2]));
console.log(deleteDuplicates([1, 1, 2, 3, 3]));

/*20.You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and retu rn the resulting array of digits.*/
const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3])); // 124 - DONE
console.log(plusOne([4, 3, 2, 1])); // 4322 - DONE
console.log(plusOne([9])); // 10 - DONE

/*21.Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.*/
//O(log n) - бинарный поиск
const searchInsert = function (nums, target) {
  //нулевой индекс
  let start = 0;
  //последний индекс
  let end = nums.length - 1;
  //выполняем функцию пока targer находится между start и end
  while (start <= end) {
    //середина массива
    let median = Math.floor((start + end) / 2);
    //если серидина равно=а target возвращаем позицию
    if (nums[median] === target) return median;
    //если серидина больше target
    if (nums[median] > target) {
      //ищем в левой стороне
      end = median - 1;
    }
    //если серидина меньше target ищем в правой стороне
    else {
      start = median + 1;
    }
  }
  return end + 1;
};

console.log(searchInsert([1, 3, 5, 6], 5)); //2 - DONE
console.log(searchInsert([1, 3, 5, 6], 2)); //1 - DONE
console.log(searchInsert([1, 3, 5, 6], 7)); //4 - DONE

/*22.Write an algorithm to determine if a number n is happy.A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.Return true if n is a happy number, and false if not.*/
const isHappy = function (num) {
  //хранение значений
  let hash = {};
  //пока значение не равно 1 и не втсречалось в d hash
  while (num !== 1 && !hash[num]) {
    //уже было
    hash[num] = true;
    //получить getPow из текущего числа
    num = getPow(num);
  }
  //если число счастливое возврашаем true, если нет false
  return num === 1;
};

function getPow(n) {
  let str = String(n).split("");
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(Number(str[i]), 2);
  }
  return sum;
}

console.log(isHappy(19)); //true - DONE
console.log(isHappy(2)); //false - DONE
console.log(isHappy(7)); //true - DONE

/*23.Given a string s, return the number of segments in the string.A segment is defined to be a contiguous sequence of non-space characters.*/
const countSegments = function (s) {
  let arr = s.split(" ");
  let count = 0;

  for (let segment of arr) {
    //если не пустая строка
    if (segment !== "") {
      count++;
    }
  }
  return count;
};

console.log(countSegments("Hello, my name is John")); //5-DONE
console.log(countSegments("Hello")); //1 - DONE

/*24.Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M..*/
const romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for(let i =0; i< s.length; i++){
    //текущее зачение
    let cur = romanNumerals[s[i]]
    //след значение
    let nextNum = romanNumerals[s[i+1]]
    //если текущее меньше чем след
    if(cur<nextNum){
      //текущий вычитается
      sum -= cur
    } else{
      sum += cur
    }
  }

  return sum;
};
console.log(romanToInt("III")); //3 -DONE
console.log(romanToInt("LVIII")); //58 -DONE
console.log(romanToInt("MCMXCIV")); // 1994- DONE

/*25.Given a string s containing just the characters '(',   ')',   '{',   '}',  '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/
const isValid = function(s) {
  //для сравнения и сохранения
  let check = [];
  const symbols = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  //символ есть в строке
  for(let char of s){
    //если массиы включает символ
    if(['(', '{', '['].includes(char)){
      //пушим в проверяющий массив
      check.push(char)
      //если нет
    } else {
      //если последний эл-т не равен char
      if(check.pop() !==symbols[char]){
        return false
      }
    }
  }
  //если check пуст все пары найдены, если нет false
  return check.length === 0 
};

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))



//100 Leetcode challenge: Tasks 24-25
