

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

/*8.Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions. The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))). The function composition of an empty list of functions is the identity function f(x) = x. You may assume each function in the array accepts one integer as input and returns one integer as output. */
const compose = function(functions){
    return function(x){
//если в массиве одно значение, его и возвращать
        if(functions.length === 0){
            return x;
        } 

        let result = x;
//проходимся по массиву ф-ий с конца
        for(let i =functions.length-1; i >=0; i-- ){
//результат выполнения становится новым занчением каждой последуюзей ф-ии
            result = functions[i](result)
        }
        return result;
    }
}

/*9.Write a function argumentsLength that returns the count of arguments passed to it. */
const argumentsLength = function(...args) {
    let result = 0;
    for(let i =0; i <args.length; i++){
        result = args[i].length
  }
  return result
};

let a = [5]
let b = [1,2,3]
console.log(argumentsLength(a))
console.log(argumentsLength(b))

/*10.Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.The first time the returned function is called, it should return the same result as fn.Every subsequent time it is called, it should return undefined. */
const once = function(fn) {
    //отследить - была ли функция вызвана
    let calls  = false;
    return function(...args){
//если еще не была вызвана
        if(!calls){
//функция была вызвана
            calls = true
//вызывается fn с аргументами
           return fn(...args);
        } else{
//функция уже вызвана и возвращается undefined  
            return undefined  
        }
    }
}

/*11.Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.*/
const addTwoPromises = async function(promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1,promise2])
     return val1+val2    
 };

/*12.Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.*/
async function sleep(millis) {
    await new Promise((resolve) =>setTimeout(resolve, millis))
}

/*13.Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.
You may assume that fn will never duplicate numbers for a given array. */
var sortBy = function(arr, fn) {
    // с помощью slice() копируем массив. В sort -сортируем с помощью определения разницы определяем какой элемент будет первым 
    return arr.slice().sort((a,b)=>fn(a)-fn(b))
  };

/*14.Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.Your Calculator class should have the following methods:
add - This method adds the given number value to the result and returns the updated Calculator.
subtract - This method subtracts the given number value from the result and returns the updated Calculator.
multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
power - This method raises the result to the power of the given number value and returns the updated Calculator.
getResult - This method returns the result. */
class Calculator {
	constructor(value) {
		this.value = value
	}

	add(value){
		this.value+=value
        return this
	}


	subtract(value){
		this.value-=value
        return this     
	}

	multiply(value) {
		this.value*=value
        return this
	}

	divide(value) {
          if(value===0){
               throw new Error ('Error')
          } 
          this.value/=value
          return this	
	}
  
	power(value) {
		this.value**=value
        return this
	}

	getResult() {
		return this.value
	}
}

const myCalculator = new Calculator(0); // Initialize with an initial value
const result = myCalculator.add(5).multiply(3).divide(2).power(2).getResult();
console.log(result);// Result = 56.25

/*15.Given an object or an array, return if it is empty.An empty object contains no key-value pairs.An empty array contains no elements. */
var isEmpty = function(obj) {
    //если массив
    if(Array.isArray(obj).length===0){
         return true
         //если объект
    } else if(Object.keys(obj).length===0){
         return true
    }
    return false
};

let obj1 = [null, false, 0];
let obj2 ={}
console.log(isEmpty(obj1))
console.log(isEmpty(obj2))

/*16.Зареверсить слова в строке, но оставить позицию этих слова на месте */
function revrseString(str){
    let arr = str.split(' ')
    let reversWord = arr.map((word) =>{ 
        //тк просто reverse() нельзя использовать потому что он нарушает условия выполнения map, нужно разделить слова на массив,переверенуть и соединить
        return word.split('').reverse().join('')})
    return reversWord.join(' ')
}

console.log(revrseString('well done'))//Result = "llew enod"

/*17. Задача на сортировку людей по росту. Есть ф-я которая принмиаетя в себя два параметра имена и рост.Сопоставить имена и рост и по возрастанию построить*/

const sortingeople =(arr1,arr2)=>{
    let people =[];
    for(let i=0; i<arr1.length; i++){
       people.push({name: arr1[i], height: arr2[i]})
        
        }
       return people.sort((a,b)=> a.height-b.height);   
    }

let names = ['Mary',"John",'Emma']
let height=[180, 165,170]
console.log(sortingeople(names,height))

/*18.Ф-я принимает один аргумент(число). Это число положительное, нужно найти сумму всех чисел от одного до этого числа которые деляться на 3,5,7 */

const sum =(num)=>{
    let arr =[]
    let sumArr =0
    for(let i=1; i<=num; i++){
        if(i%3 ===0 || i%5 ===0 || i%7===0){
            arr.push(i)  
        }
        sumArr = arr.reduce((acc,cerValue)=>acc+cerValue,0)
    }
    return sumArr
}

console.log(sum(9))

/*19.Есть массив из строк каждая строка это массив из строк, каждая строка это предложение. Найти предлодение у которого самое больщое количество слов */
const maxWSentanceCount =(arr)=>{
    //хранение количества слов в самом длинном предложении
    let maxWords =0
    let longSen = ''
    for(let i=0; i<arr.length; i++){
        let arrOfSen =arr[i].split(' ')
        //если количество слов в текущем предложении больше, чем maxWordCount, то обновляем maxWordCount и сохраняем текущее предложение в longSen
            if(maxWords <arrOfSen.length){
                maxWords = arrOfSen.length
                longSen = arr[i]
            }
    }
    return longSen 
}

const sentences = [
    'The quick brown fox jumps over the lazy dog.',
    'A journey of a thousand miles begins with a single step.',
    'To be or not to be, that is the question.',
    'All that glitters is not gold.',
    'In the beginning God created the heavens and the earth.',
    'Two roads diverged in a wood, and I took the one less traveled by.',
    'The only thing we have to fear is fear itself.',
    'Where there is love there is life.',
    'It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.'
  ];

console.log(maxWSentanceCount(sentences))

/*20. Найти самый длинный префикс среди заданых строк: line, listen, library -> li*/
//1. Вариант: сравнить строки попарно
//функция сравнения попарно 
const getCommonPrefix=(prefix, str2)=>{
    let result ='';
    //сразу как одна из переменных дойдет до конца строки, цикл остановится, поскольку одна из строк будет уже завершена
    for(let i=0, j=0;
        i <=prefix.length && j < str2.length; 
        i++, j++){
        //если префикс не равен строке2 то выходим/заканчиваем
        if(prefix[i] != str2[j]){
            break
        }
        //если симовлы на этой итерации одинаковые, то добавляем в переменную result
       result += prefix[i]
    }
    return result;
}

function getLongestPrefix(arr){
    //проинициализуеруем первой строкой для массива, т.е на первом шаге решаем что префикс это первое слово в массиве 
   let prefix =arr[0]
   //запускаем цикл для входа всех строк, начианем сщ второго, т.к. 1 мы уже созранили в переменной prefix, и нет смысла пробегаться по нему еще раз 
   for(let i = 1; i <arr.length; i++){
    //присваеваем переменной  prefix функцию с предыдущим состоянием и строку в массиве
    prefix=getCommonPrefix(prefix, arr[i])
   }
   return prefix
}
const arrLine = ["line","listen", "library"]
const arrAlph =['abc345',"abcojpohp", "abcdrw", 'abcpoiu']
console.log(getLongestPrefix(arrLine))//Result = li
console.log(getLongestPrefix(arrAlph))//Result = abc
//оптимальное решение для этой же задачи
function getLongestPrefix2(arr){
   //сначала отсортируем массив
   arr.sort()
   //вывести минимальную длину между двумя строками: сравниваем первую и последнюю строку
   const minLine = Math.min(arr[0].length, arr[arr.length-1].length)
   //проходимся по 6(из результата minLine) элементам в этих двух строках
   // в цикле i<minLine до тех пор пока симовол в первой равен символу в последней строке, будем инкреметировать счетчик
   i=0
   while(i<minLine && arr[0][i] ===arr[arr.length-1][i]){
    i++;
   }
   return arr[0].substring(0,i)
//    return i//3
//    return minLine//6
}

const arrLine2 = ["line","listen", "library"]
const arrAlph2 =['abc345',"abcojpohp", "abcdrw", 'abcpoiu']
console.log(getLongestPrefix2(arrLine2))//Result = li
console.log(getLongestPrefix2(arrAlph2))//Result = abc

/*21.Определить являются ли строки анаграммой (состоят из одних и тех же символов): listen -> silent (EASY LEVEL)*/ 
function isAnagramm(str1,str2){
    let constStr1 = str1.split('').sort().join('');
    let constStr2 = str2.split('').sort().join('')

    return constStr1 === constStr2
}

console.log(isAnagramm('listen',"silent"))//Result = true
console.log(isAnagramm('listen',"silenthill"))//Result = false

/*22.	Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1] (EASY LEVEL)*/

function indicesTwoNumbers(nums, target){
    const hashMap = {}
    for(let i=0; i<nums.length; i++){
        const comp = target - nums[i]
        if(comp in hashMap){
            return [hashMap[comp], i]
        }
        hashMap[nums[i]]=i
    }
    return []
}

const nums = [2, 7, 11, 15];
const target = 9;
const nums1 = [2, 7, 1, 15];
const target1 = 8;
console.log(indicesTwoNumbers(nums, target)) //[0,1]
console.log(indicesTwoNumbers(nums1, target1))//[1,2]

/*23.Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).
Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000 (HARD LEVEL)*/
function returnMedian(arr1, arr2){
   let newArr = [...arr1, ...arr2].sort((a,b)=>a-b)
   let result = 0
   for(let i=0; i < newArr.length; i++){
    if(i === Math.floor(newArr.length/2)){
        if(newArr.length%2===0){
            result = newArr[i-1]+newArr[i]/2
        } else{
            result = newArr[i]
        }
        break
    }
   }
    return result
}
console.log(returnMedian([1,3], [2]))// 2
console.log(returnMedian([1,3], [10, 8]))//7
console.log(returnMedian([1,3], [10, 7, 15,4]))//7.5
/*22. Определить является ли строка палиндромо (последовательность символов которая одинаково чиатется в обоих направлениях*/

/*23. Вывести n-е число Фибоначчи (ряд чисел, где кажде последующее является  суммой дву) */

