"use strict";

const p = document.querySelectorAll('p');

console.log(p);

const script = document.createElement('script');
script.src = "js/test.js";
script.async = false;
document.body.append(script); 