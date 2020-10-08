const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));//если есть класс-удалит, если нет-добавит

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
//     if(!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } 
//     else {
//         btns[1].classList.remove('red');
//     }

    btns[1].classList.toggle('red');

});

//console.log(btns[0].className);//старый и неудобный метод

wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.tagName == "BUTTON") { //if(event.target && event.target.classList.contains('blue'))
        console.log('Hello');
    }
});//if(event.target && event.target.matches('button.red'))

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


