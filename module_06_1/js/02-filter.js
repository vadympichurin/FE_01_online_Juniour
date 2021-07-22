/**
 * Array.prototype.filter();
 * Поэлементно перебирает оригинальный массив
 * Возвращает новый массив
 * Добавляет в новый массив элементы которые удовлетворяют условию
 */


//  const numbers = [5,8,10,15,35];
//  const filteredNumbers = numbers.filter(function(element, index, array){
//    return element >= 8;
//  });

//  console.log(filteredNumbers);

// ======================================
 const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
    { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
    { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
  ];

/**
 * Получаем массив всех онлайн игроков
 */

const online = players.filter(function(player){
  return player.online;
});

// console.log('online : ', online);


/**
 * Получаем массив всех оффлайн игроков
 */

const offline = players.filter(function(player){
  return !player.online;
});

// console.log('offline : ', offline);

// console.log(!false);
// console.log(Boolean('hello'));
// console.log(!!'hello');


/**
 * ПОлучаем список самых лучших игроков со временем больше 250
 */

const bestPlayers = players.filter(function(player){
  return player.timePlayed > 250;
});

console.log('bestPlayers : ', bestPlayers);

/**
 * ======= Фильтр своими руками =======
 * - создает новый массив и возвращает его
 * - вызывает коллбек для каждого элемента
 * - если коллбек вернул true пишет элемент в новый массив
 */

//  const numbers = [5, 8, 10, 15, 35];

//  const filter = 