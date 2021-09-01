import '../css/common.css';
// window.setTimeout();
// window.console.log();
// const test = (a, b) => {
//    console.log(a, b);
// }



/*
 * Метод window.setTimeout(callback, delay, args)
 */

console.log("before setTimeout");

const timerId = setTimeout(() => {
  console.log("inside timer");
}, 0);
// console.log('timerId : ', timerId);

console.log("after setTimeuot");

// for(let i = 0; i < 100000; i++){
//   console.log(i);
// }

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */



// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if(shouldCancelTimer){
//   clearTimeout(timerId);
// }