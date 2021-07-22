// array.method(callback(element, index, array));

// const a = [];
// console.dir(a);
// const a = new Array();

/*
 * Array.prototype.forEach()
 * Поэлементно перебирает оригинальный массив
 * Ничего не возвращает
 * Заменяет классический for если не нужно прерывать цикл
 */

const numbers = [5, 8, 10, 15, 35];

const doubleNumbers = [];

// for(let i = 0; i < numbers.length; i += 1){
//     doubleNumbers.push(numbers[i] * 2);
// }

numbers.forEach(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);

    doubleNumbers.push(element * 2);
})

console.log('doubleNumbers : ', doubleNumbers);
