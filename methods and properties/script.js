"use strict";

const str = "test";

// const arr = [1, 2, 3];

// console.log(arr.length);//колличество элементов в массиве
// console.log(str.length);//колличество символов в строке

// console.log(str[2]);//выведет "s"
// //console.log(str[2] = 'd')-nepravilno

console.log(str.toUpperCase());//этот код уже возвращает новое значение, при этом не меняяч исходника

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 11));//2 argumenta- первый- с какой позиции мы вырезаем строку,
//                                            второй-до какого момента мы вырезаем

console.log(logg.substring(6, 11));// то же самое что и slice

console.log(logg.substr(6, 5));//отличие в том, что второй аргумент- сколько нужно вырезать символов

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
//console.log(parseInt(test));//переводит число в другую систему исчисления
console.log(parseFloat(test));
