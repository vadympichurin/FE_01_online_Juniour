/**
   * Array.prototype.sort()
   * Сортирует и ИЗМЕНЯЕТ оригинальный массив
*/

const numbers = [15, 5, 8, 10, 35];

const sortedNumbers = [...numbers].sort(function(prev, next){
  return prev - next;
});
console.log('sortedNumbers : ', sortedNumbers);
console.log('numbers : ', numbers);

// const copy = numbers.slice();
// const copy2 = [...numbers];


const letters = ['B', 'b', 'a', 'A'];
letters.sort(function(prev, next){
  return prev - next;
});

// console.log(letters);

// console.log('a'.charCodeAt(0));
// console.log('A'.charCodeAt(0));


/**
 * отсортировать игроков по количеству часов
 */
const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
    { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
    { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
  ];


const sortedPlayers = [...players].sort(function(prev, next){
  return next.timePlayed - prev.timePlayed;
})

console.log('sortedPlayers : ', sortedPlayers);