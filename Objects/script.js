"use strict";

//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log("test");
    }
};

options.makeTest();

const {border, bg} = options.colors;//вытаскиваем свойства с объекта
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;
// console.log(options);

// for(let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for(let i in options[key] ) {
//             console.log(`Свойство ${i} имеет значение ${options[key] [i]} `);
//         }
//     } 
//     else {
//         console.log(`Свойство ${key} имеет значение ${options[key]} `);
//     }
    
// }