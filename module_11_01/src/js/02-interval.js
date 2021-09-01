import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

const logger = time => console.log(`Лог кожні ${time}s - ${Date.now()}`);

console.log('Before interval');

const intervalId = setInterval(logger, 2000, 2);

console.log('After interval');


/*
 * Очистка интервала с clearInterval(intervalId)
 */

const shouldCancelInterval = Math.random() > 0.3;
console.log(shouldCancelInterval);

if(shouldCancelInterval){
    clearInterval(intervalId);
}

