'use strict';

function addTwoNumbers(x, y) {
    return x + y;
};

let result = addTwoNumbers(8, 9);
console.log(result);

const add = function(a, b) {
    return a + b;
}

// otherFunc(function (x ,y) {........})

function myFunc() {
    return anotherFunc() // ok, anotherFunc is hoisted
    function anotherFunc() {
        return console.log('Hello');
    };
};

console.log(myFunc());

// ------------- arrays

var arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(arr[0]);

console.log(arr[3]);

arr[3] = "x";
console.log(arr);

console.log(arr.length);

const arr1 = ['Name', 'lastName'];
console.log(arr1.length);


console.log(1 in arr);
console.log(6 in arr);

var exampleArray = [];
exampleArray.test = 111;
console.log(exampleArray);
console.log(exampleArray.test);

console.log(arr);
console.log(arr.slice(1, 2));

const names = ['Ali', 'Aaron', 'Dale', 'Asti'];
console.log(names.slice(1, 2));
console.log(names.slice(2, 4));

console.log(names.pop());
console.log(names);

console.log(names.push('Jordan'));
console.log(names);

// merge two arrays, arr and names
console.log(arr.concat(names));

names.forEach(name => console.log(name));

console.log(names);
const firstValue = names.shift();
console.log(firstValue);
console.log(names);

names.unshift('Muaz');
console.log(names);

const newNames = names.reverse();
console.log(newNames);

names.indexOf('Dale');
console.log(names.join('-'));

console.log(arr.join());

// map()
const newArr = arr.map(x => x * 4);
console.log(newArr);

// reduce()
let sum = [0, 1, 2, 3];
sum = sum.reduce((a,b) => {
    return a+b
}, 0)
console.log(sum);

//thsi adds 1 to each element of the array and then adds them all together
  
// splice()














