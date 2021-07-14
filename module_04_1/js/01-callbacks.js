/**
 * Функция обратного вызова (callback) и функции высшего порядка (hof)
 */

// high order function - hof

const greet = function (name) {
    console.log(`Hello ${name}`);
}

// greet('Mango');

const greetWithName = function(callback) {
    const name = "Mango";
    console.log(callback);
    callback(name);
}

greetWithName(greet);
 

/**
 * greetWithName = hof
 */

// window.addEventListener('keydown', onPressESC)



/**
 * Отложенный вызов: регистрация собитий
 */

/**
 * Отложенный вызов интервалы
 */

/**
 * 
 */