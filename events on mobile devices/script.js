"use strict";

//touchstart событие срабатывает при начале касания
//touchmove когда палец при касании с элементом начинает двигаться
//touchend как только палец оторвался от элемента, тогда оно и выполняется
//touchenter срабатывает когда ведешь пальцем по экрану и наскальзываешь на элемент
//touchleave  когда палец продолжил скользить
//touchcancel  возникает тогда, когда точка касания отменяется на поверхности

document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    box.addEventListener("touchstart", (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.targetTouches);
    });
    box.addEventListener("touchmove", (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });
    box.addEventListener("touchend", (e) => {
        e.preventDefault();

        console.log('end');
    });
});
//properties:
//touches выдает список пальцев, которые сейас взаимодайствуют с экоаном
//targetTouches
//changedTouches