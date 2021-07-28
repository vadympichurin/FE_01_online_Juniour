/**
 * Синтаксис стрелочной функции
 * - с параметрами       (a, b)
 * - с одним параметром a
 * - без параметров ()
 */
//  const add = function (a, b) {
//     return a + b;
//   };

// const add = (a, b) => {
//   return a + b;
// };

// const showMessage = message => {
//   console.log(message);
// };

// showMessage("Hello!");

// console.log(add(2, 5));

// const greet = () => {
//    console.log('Hi, I`m Mango!' );
// }
// greet();

/**
 * Явный и неявный возврат
 */

//  const add = function (a, b) {
//     return a + b;
//   };

// const add = (a, b) => {
//     return a + b
// };

// const add = (a, b) => a + b;

// console.log(add(3, 2));

/**
 * Псевдомассив аргументс
 */

const multiple = (...numbers) => {
    console.log(numbers);
    const result = numbers.reduce((acc, item) => acc += item, 0);

    return result;
};

console.log(multiple(2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7));