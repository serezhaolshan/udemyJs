"use strict";

 let str = "some";
 let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const solider = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("hello");
    }
};

const john = Object.create(solider);

// const john = {
//     health: 100
// };

// john.__proto__ = solider;

// Object.setPrototypeOf(john, solider);//эта запись то же самое что и запись на 23 строке, только эта новее


// console.log(john.armor);
john.sayHello();

