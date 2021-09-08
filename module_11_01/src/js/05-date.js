import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

// const date = new Date();

// console.dir(date.getTime());
// console.dir(date);

const date2 = Date.now();
console.log(date2);

setTimeout(() => {
  const date3 = Date.now();
  
console.log(date2);
console.log(date3);
}, 3000);