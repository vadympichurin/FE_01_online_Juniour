  /**
   * Array.prototype.reduce()
   * Поэлементно перебирает оригинальный массив
   * Возвращает что угодно 
   * Заменяет все на свете , но использовать нужно с умом
   */

//    Array.prototype.reduce = function(callback, initialValue = this[0]){
//     let accumulator = initialValue;

//     for(let i = 0; i < this.length; i += 1){
//         accumulator = callback(accumulator, this[i], i, this);
//     }

//     return accumulator;
// }

   const numbers = [15, 5, 8, 10, 35];

   const total = numbers.reduce(function(accumulator, element){
        // console.log('accumulator : ', accumulator);
        // console.log('element : ', element);

        return accumulator += element;
   }, 0);

   console.log('total :', total);


/*
* схема как работает
*/

// acc = 0; el = 15; return acc + el = 0 + 15 = 15;
// acc = 15; el = 5; return acc + el = 15 + 5 = 20;
// acc = 20; el = 8; return acc + el = 20 + 8 = 28;
// acc = 28; el = 10; return acc + el = 28 + 10 = 38;
// acc = 38; el = 35; return acc + el = 38 + 35 = 73;


/**
 * считаем общую ЗП
 */ 

const salary = {
    mango: 150,
    poly: 300,
    kiwi: 278,
}
// const salaryArray = Object.values(salary);
// console.log(salaryArray);
const totalSalary = Object.values(salary).reduce(function(acc, item){
    // console.log(acc);
    return acc += item;
}, 0);

console.log('totalSalary : ', totalSalary);


/*
* Посчитать общее количество часов игроков
*/ 
 
const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
    { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
    { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
  ];

const totalTimePlayed = players.reduce(function(acc, player){
    // console.log(acc);
    // console.log(player);

    return acc += player.timePlayed;
}, 0);

// console.log('totalTimePlayed : ', totalTimePlayed);


/*
 *  считаем сумму всех товаров в корзине
 */ 

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 170, quantity: 4 },
    { label: 'Lemones', price: 210, quantity: 3 },
];

const totalAmount = cart.reduce(function(acc, item){
    return acc += item.price * item.quantity;
}, 0);

// console.log('totalAmount : ', totalAmount);


/*
* собираем все теги из твитов 
*/ 

const tweets = [
    {id: '000', likes: 5, tags: ['js', 'nodejs']},
    {id: '001', likes: 7, tags: ['html', 'css']},
    {id: '002', likes: 55, tags: ['html', 'js', 'nodejs']},
    {id: '003', likes: 7, tags: ['css', 'react']},
    {id: '004', likes: 13, tags: ['js', 'nodejs', 'react']},
];

const allTags = tweets.reduce(function(acc, tweet){
    // acc.push(...tweet.tags);
    // return acc;

    return [...acc, ...tweet.tags];
}, []);

console.log('allTags : ', allTags);



/**
 * возвращаем объект со статистикой каких тегов сколько 
 * {
 *   js: 3,
 *   nodejs: 3,
 *   css: 3
 * }
 */

const tagsStatistic = allTags.reduce(function(acc, tag){
    // if(acc.hasOwnProperty(tag)){
    //     acc[tag] += 1;
    //     return acc;
    // }

    // acc[tag] = 1;
    // return acc;

    acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] += 1 : 1;
    return acc;
}, {});

console.log('tagsStatistic : ', tagsStatistic);

