/**
 * Array.prototype.find();
 * Поэлементно перебирает оригинальный массив
 * Возвращает первый элемент удовлетворяющий условию
 */

const numbers = [5, 8, 10, 9, 15, 35];

const myNumber = numbers.find(function (element, index, array) {
  return element > 8;
});

// console.log('myNumber : ', myNumber);


/**
 * ищем игрока по id
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
];

const searchId = 'player-4';

  const searchPlayer = players.find(function(player){
    return player.id === searchId;
  });

  console.log('searchPlayer : ', searchPlayer);

