"use strict";

const p = document.querySelectorAll('p');

console.log(p);


function loadScript(src) {
    const script = document.createElement('script');
script.src = "js/test.js";
script.async = false;
document.body.append(script); 

}

loadScript("js/test.js");
loadScript("js/some.js");