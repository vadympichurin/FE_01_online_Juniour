// const showTag = function (arg1, arg2, arg3) {
//     console.log(arg1, arg2, arg3);
//     console.log('this: ', this);
//     console.log('this.tag :', this.tag);
// }

// const mango = {
//     tag: "Mango",
// }

// const poly = {
//     tag: 'Poly',
// }

// poly.showTag();
// mango.showTag();

// console.dir(showTag);

// showTag.call(mango, 1,2,3);
// showTag.apply(mango, [1, 2, 3]);

// showTag.call(poly, 5, 10, 15);
// showTag.apply(poly, [5, 10, 15]);


// const showMangoTag = showTag.bind(mango);

// showMangoTag(1, 2, 3);

/**
 * EXAMPLE
 */

// const cart = {
//     items: ['Phone', 'Micro'],
//     showItems(){
//         console.log('this : ', this);
//         console.log(this.items);
//     },
// }

// const btn = document.querySelector('.js-show-items');

// btn.addEventListener('click', cart.showItems.bind(cart));