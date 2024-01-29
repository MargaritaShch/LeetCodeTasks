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
// const fn =   function(){
//     let newArr =[];
//     for(let i = 0; i<arr.length; i++){
//         newArr = arr[i]+1
//     }
//     return newArr
// }
// let arr =[1,3,4]

// const f3 = map(arr, fn())
// console.log(f3)

 /*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.*/
