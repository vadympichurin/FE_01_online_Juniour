/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */
const coordsOutputRef = document.querySelector('.js-coords');
const coordsOutputRef2 = document.querySelector('.js-coords2');

let mouseMoveCbInvocationCounter = 0;
let mouseMoveCbInvocationCounter2 = 0;

// console.dir(_.throttle);


window.addEventListener('mousemove', onMouseMove);
window.addEventListener('mousemove', _.throttle(throttledOnMouseMove, 500));

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

function throttledOnMouseMove(event) {
  mouseMoveCbInvocationCounter2 += 1;

  coordsOutputRef2.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter2},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

/*
 * Input и debounce
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 1000));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}