/**
 * Функція це ссилочний тип даних!!!!
 * Функція - це особий вид об'єкту
 */

// console.log("{} === {} :",{} === {});
// console.log("[] === [] : ", [] === []);
// console.log(function(){} === function(){});

// const fnA = () => {console.log('Hello');}
// const fnB = fnA;

// console.log(fnA === fnB);


/**
 * Контекст (this)
 * - НЕ ВАЖЛИВО де і як була створена фукція, це не впливає на КОНТЕКСТ;
 * - контекст визначається в МОМЕНТ ВИКЛИКУ ФУНКЦІЇ
 */


/**
 * Як метод об'єкту. В контексті об'єкту
 */

// const user = {
//     tag: 'Mango',
//     showTag(){
//         console.log(this);
//         console.log(this.tag);
//     }

// }

// user.showTag();

// const poly = {
//     tag: 'Poly',
// }

// poly.show = user.showTag;

// poly.show();

/**
 * Виклик фукції без контексту
 */

// const foo = function(){
//     console.log('this : ', this);
// }

// foo();


/**
 * Як метод об'єкту, але створена (оголошена) як зовнішня функція. В контесті об'єкту
 */

// const showTag = function () {
//     console.log(this);
//     console.log(this.tag);
// }

// const user = {
//     tag: "Mango",
// }

// user.showTag = showTag;
// console.log('user :',user);
// user.showTag();

/**
 * Виклик без контексту, але фун-я оголошена як метод об'єкту 
 */

// const user = {
//     tag: 'Mango',
//     showTag(){
//         console.log(this);
//         console.log(this.tag);
//     }
// }

// // user.showTag();

// const outerFunc = user.showTag;

// outerFunc();

/**
 * Контекст в callback
 */

// const user = {
//     tag: 'Mango',
//     showTag(){
//         console.log(this);
//         console.log(this.tag);
//     }
// }

// const involkeAction = function(action){
//     console.log(action);

//     action();
// }

// user.showTag();

// involkeAction(user.showTag);


/**
 * 1
 */

// const makeChangeColor = function(){
//     const changeColor = function(color){
//         this.color = color;
//     }

//     const dress = {
//         color: 'teal',
//     }

//     dress.changeColor = changeColor;

//     return dress.changeColor;
// }

// const changeColor = makeChangeColor();
// changeColor('red');

/**
 * 2
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         this.color = color;
//     }

//     return changeColor;
// }

// const hat = {
//     color: 'blue',
//     changeColor: makeChangeColor(),
// }

// hat.changeColor('orange');

// console.log(hat);