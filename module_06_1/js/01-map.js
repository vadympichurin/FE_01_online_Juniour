/**
 * Array.prototype.map();
 * Поэлементно перебирает оригинальный массив
 * Возвращает новый массив такой же длины
 */

// const numbers = [5, 8, 10, 15, 35];

// const doubleNumbers = numbers.map(function (element, index, array) {
//   return element * 2;
// });

// const copy = numbers.map(number => number);
// const copy2 = [...numbers];

// console.log('doubleNumbers :', doubleNumbers);
// console.log(doubleNumbers === numbers);

// ================================
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
];


/**
 * Получаем массив имен всех игроков
 */

const playersNames = players.map(function (player) {
  // console.log(player);
  return player.name;
});
// console.log(playersNames);

/**
 * увеличиваем количество поинтов каждого игрока
 */

const increasePoints = players.map(function (player) {
  // console.log(player);
  return {
    ...player,
    points: player.points + 15,
  }
});

// console.log(increasePoints);


/**
 * Увеличиваем количество часов игрока по id
 */

const idToChange = "player-3";

const increaseTime = players.map(function (item) {
  if (item.id === idToChange) {
    return {
      ...item,
      timePlayed: item.timePlayed + 25,
    }
  }

  return {...item};

});
// console.log(players);
// console.log('increaseTime : ', increaseTime);

/**
 * ======== Пишем .map() своими руками ============
 *
 * - создает и возвращает новый массив
 * - перебирает оригинальный массив
 * - вызывает коллбек для каждого элемента и кидает туда аргументы (элеметн, индекс, массив)
 * - записывает результат вызова функции в новый массив
  */

 const numbers = [5, 8, 10, 15, 35];

 const map = function(array, callback){
   const newArray = [];

   for(let i = 0; i < array.length; i += 1){
     newArray.push(callback(array[i], i, array));
   }

   return newArray;
 };

 const doubleNumbers = map(numbers, function(item, index, array){
   console.log('item : ', item);
   console.log('index : ', index);
   console.log('array : ', array);
   
   return item * 2;
 });

  console.log('doubleNumbers : ', doubleNumbers);
  console.log('numbers : ', numbers);


