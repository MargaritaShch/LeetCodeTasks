//30 Days of JavaScript
/*1.Write a function createHelloWorld. It should return a new function that always returns "Hello World".*/
const createHelloWorld = function() {
    let str=''
    return function(...args) {
        return str ="Hello World"
    }
};


const f = createHelloWorld();
console.log( f()); // "Hello World" - DONE

/*2.Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). */
const createCounter = function(n) {
    return function() {
       return n++
    };
};
const counter = createCounter(10)
console.log(counter()) // 10 - DONE
console.log(counter()) // 11 - DONE
console.log(counter()) // 12 - DONE

/*3.Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".*/
const expect = function(val) {
    return {
        toBe: function(num){
            if(num === val){
                return true
            } else{
                throw new Error("Not Equal")
            }
        },
        notToBe: function(num1){
            if(num1 !== val){
                return true
            } else{
                throw new Error("Equal")
            }
        }
        }
    }

const f1 = expect(5).toBe(5)
console.log(f1); // true - DONE

/*4.Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.*/
const createCounter1 = function(init){
    let count = init 
    return{
        reset: function(){
            return count = init;
        },
        increment:function(){
            return ++count
        },
        decrement: function(){
            return --count
        }     
    }
}

const counter1 = createCounter1(5)
console.log(counter1.increment()) ; // 6
console.log (counter1.reset()); // 5
console.log (counter1.decrement()); // 4

/*5.Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.The returned array should be created such that returnedArray[i] = fn(arr[i], i).Please solve it without the built-in Array.map method.*/
// const map = function(arr, fn) {
//     let newArr =[];
//     for(let i = 0; i<arr.length; i++){
//         newArr.push(fn(arr[i], i))
//     }
//     return newArr
// };
// let arr =[1,3,4]

// const f3 = map(arr, fn())
// console.log(f3)// -DONE

/*6.Given an integer array arr and a filtering function fn, return a filtered array filteredArr.The fn function takes one or two arguments:arr[i] - number from the arr;i - index of arr[i]. filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.Please solve it without the built-in Array.filter method.*/
// const filter = function(arr, fn) {
//     newArr = [];
//     for(let i=0; i<arr.length; i++){
//         if(fn(arr[i], i))
//         newArr.push(arr[i])
//     }
//     return newArr;
// };

/*7.Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.If the length of the array is 0, the function should return init.Please solve it without using the built-in Array.reduce method. */
// const reduce = function(nums, fn, init) {
//     let sum = init
//      for(let i = 0; i<nums.length; i++){
//         sum = fn(sum,nums[i])
//      }
//      return sum
//  };//-DONE

 /*9.Write a function argumentsLength that returns the count of arguments passed to it.*/
 const argumentsLength = function(...args) {
    let newArr = [...args]
        return newArr.length
}
console.log(argumentsLength(5))//1 - DONE

/*12.Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.*/
const addTwoPromises = async function(promise1, promise2) {
    let [result1,result2] = await Promise.all([promise1,promise2])
    return result1 + result2
};
let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
console.log(addTwoPromises(promise1,promise2))//7 - DONE

/*13.Дана функция fn, массив аргументов args и время ожидания t в миллисекундах. Верните функцию отмены cancelFn.После задержки в cancelTimeMs, вызовется возвращенная функция отмены cancelFn. setTimeout(cancelFn, cancelTimeMs).Изначально выполнение функции fn должно быть отложено на t миллисекунд.Если до истечения времени t функция cancelFn вызывается, она должна отменить отложенное выполнение fn. В противном случае, если cancelFn не вызывается в течение указанной задержки t, fn должна выполниться с предоставленными args в качестве аргументов.Input: fn = (x) => x * 5, args = [2], t = 20
Output: [{"time": 20, "returned": 10}]
Explanation: 
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);
The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.*/
const cancellable = function(fn, args, t) {
    //Если до истечения времени t функция cancelFn вызывается, она должна отменить отложенное выполнение fn
    function cancelFn(){
        clearInterval(timer)
    }
   // выполнение функции fn должно быть отложено на t миллисекунд
    let timer = setTimeout(()=>{
    //если cancelFn не вызывается в течение указанной задержки t, fn должна выполниться с предоставленными args в качестве аргументов
        fn(...args)
    },t)
    //Верните функцию отмены cancelFn
    return cancelFn;
}//7 - DONE

/*14.Дана функция fn, массив аргументов args и интервал времени t. Верните функцию отмены cancelFn.После задержки в cancelTimeMs, вызовется возвращенная функция отмены cancelFn.
setTimeout(cancelFn, cancelTimeMs)
Функция fn должна быть вызвана с аргументами args сразу, а затем вызываться снова каждые t миллисекунд, пока cancelFn не будет вызвана в момент cancelTimeMs.*/
const cancel = function(fn, args, t){
    //Функция fn должна быть вызвана с аргументами args
    fn(...args)
    //функция отмены cancelFn
    function cancelFn(){
        clearInterval(timer)
    }
    //вызываться снова каждые t миллисекунд
    let timer = setTInterval(()=>{
        fn(...args);
    },t)
    //Верните функцию отмены cancelFn
    return cancelFn;
}