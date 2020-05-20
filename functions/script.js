"use strict";

let num = 20;

function showFirstMessage(text,a) {
    console.log(text);
    num = a;
}

showFirstMessage("Hello World", 100);
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {//function expression
    console.log("Hello");
};

logger();

const calc = (a, b) => a  + b;