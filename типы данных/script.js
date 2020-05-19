"use strict";

//Типы переменных:
let integer = 25;

const surname = "Olshanivskyi";

let und;

console.log(und);

const obj = {
    name: "Sergey",
    age: 17,
    isMarried: false
};

console.log(obj.age);

let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', obj.name, obj.age, integer];


for (let i = 0; i < 7; i++) {
    console.log(arr[i]);
    console.log('-------------');
}