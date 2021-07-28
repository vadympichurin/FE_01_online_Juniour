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
  
//   const playersNames = players.map(function (player) {
//     return player.name;
//   });

//   const playersNames = players.map(player => player.name);
//   console.log(playersNames);

/**
 * увеличиваем количество поинтов каждого игрока
 */

//  const increasePoints = players.map(function (player) {
//     return {
//       ...player,
//       points: player.points + 15,
//     }
//   });

const increasePoints = players.map(player => ({...player, points: player.points + 15}));

// console.log(increasePoints);


/**
 * - отфильтровать больше 7
 * - умножить все на 3
 * - отсортировать по возрастанию
 */

 const numbers = [15, 5, 8, 10, 35];

//  const result = numbers
//  .filter(function (number) {
//    return number > 7;
//  })
//  .map(function (number) {
//    return number * 3;
//  })
//  .sort(function (prev, next) {
//    return prev - next;
//  });

 const result = numbers
    .filter(number => number > 7)
    .map(number => number * 3)
    .sort((prev, next) => prev - next);

console.log("result : ", result);