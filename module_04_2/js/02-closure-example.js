

// const makeDish = function(name, dish) {
//     console.log(`Повар ${name} готує ${dish}`);
// }


// makeDish('Mango', 'чай');
// makeDish('Mango', 'котлеткі');
// makeDish('Mango', 'шашлик');
// makeDish('Mango', 'кофе');


const makeSheff = function(name){
    console.log(name);

    return function(dish){
        console.log(`Повар ${name} готує ${dish}`);
    }
}

const mango = makeSheff('Mango');

mango('Tea');
mango('бутік');

const poly = makeSheff('Poly');
poly('coffee');

console.dir(mango);