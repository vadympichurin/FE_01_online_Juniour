/**
 * Global env
 * Record: {}
 * Parent: null
 */

/**
 * Parent: Global env
 */
const foo = function (name) {
    /**
     * Foo env
     * Record: {name}
     * Parent: Global env
     */
    // console.log(name);

    /**
     * Parent: Foo env
     */
    return function (age) {
        /**
         * Annon func env
         * Record: {age}
         * Parent: Foo env
         */
        console.log(`My name is ${name}, I'm ${age}`);
    }
}

/**
 * Global env
 * Record: {foo : function}
 * Parent: null
 */


const mango = foo('Mango');
/**
 * Global env
 * Record: {foo : function, mango: func}
 * Parent: null
 */

// console.log(mango);


mango(16);