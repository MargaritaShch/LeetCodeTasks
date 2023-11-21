/*1.Write a function createHelloWorld. It should return a new function that always returns "Hello World". */
const createHelloWorld = function() {
    let args =['Hello', "World"];
    let result = '';
    result = args.join(' ')
    return function(...args) {
        return result;
    }
};

const f = createHelloWorld();
    console.log(f()); // "Hello World"

/*2.Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). */
const createCounter = function(n) {
    let counter = n;
    return function() {
       return counter++
  
    };
};

const counter = createCounter(10)
console.log(counter())// 10
console.log(counter()) // 11
console.log(counter()) // 12

/*3.Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal". notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". */
const expect = function(val) {
    let num = val;
    //возвращаем методы
    return {
        toBe: function (value) {
            if (value === num) {
                return true ;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (value) {
            if (value !== num) {
                return  true ;
            } 
            // else {
            //     throw new Error("Equal");
            // }
        }
    }; 
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

/*4.Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it. */
const createCounter1 = function(init) {
    let count = init;
    return{
        increment: function (){
            return ++count
        },
        decrement: function (){
            return --count
        },
        reset: function (){
            count = init
            return count
        }
    }
    
};

const counter1 = createCounter1(5)
console.log(counter1.increment()); // 6
console.log(counter1.reset()); // 5
console.log(counter1.decrement()); // 4

/*5.Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.The returned array should be created such that returnedArray[i] = fn(arr[i], i).Please solve it without the built-in Array.map method.*/
const map = function(arr, fn) {
    let newArr = []
    for(let i=0; i<arr.length; i++){
         newArr.push(fn(arr[i],i))
    }
    return newArr;
};

/*6.Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
The fn function takes one or two arguments:
arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true. */
const filter = function(arr, fn){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        //если функция ыозвращает  true, добавалем элемент в массив
        if(fn(arr[i], i)){
            return newArr.push(arr[i])
        }
    }
}

/*7. Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.If the length of the array is 0, it should return init. */
const reduce = function(nums, fn, init) {
    let sum = init;
    for(let i=0; i<nums.length; i++){
        //моделирование операции редукции
           sum =fn(sum,nums[i])
    }
    return sum
};
