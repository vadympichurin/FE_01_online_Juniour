/**
 * Контекст стрелочной фукнции определяется местом ее объявления, а не местом вызова.
 *  И ссылается на контекст родительской функции
 */

// const showThis = () => {
//     console.log('this in showThis : ',  this);
// };

// showThis();

// const user = {name: "Mango"};
// user.showThis = showThis;

// user.showThis();


// const user = {
//     name: 'Mango',
//     showName(){
//         console.log('this :', this);
//         // console.log('this.name :', this.name);

//         const showThis = () => {
//             console.log('this in array func in showName', this);
//         }

//         showThis();
//     },
// };

// user.showName();

// const test = user.showName;
// test();

/**
 * Стрелки как метод объекта
 */


/**
 * Стрелка конструктор
 */

// const User = function (name) {
//     this.name = name;
// }

// const mango = new User('Mango');

// console.log(mango);

// const objA = {
//     x: 5,
//     showX(){
//         console.log('this in objA.showX : ', this);
//         console.log(this.x);

//         const objB = {
//             y: 10,
//             showThis: () => {
//                 console.log('this in objB.showThis : ', this);
//             },
//         };

//         console.log('objB : ', objB);
//         objB.showThis();
//     }
// };

// objA.showX();