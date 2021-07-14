/*
  Global env - створюється при виконанні файлу скрипта
    Record: {}
    Parent: null
*/

const foo = function (z) {
    /*
  foo env
    Record: {z: 100;}
    Parent: Global env
*/
    const x = 50;
  /*
  foo env
    Record: {z: 100; x: 50;}
    Parent: Global env
*/

    return x + y + z; // 50 + 30 + 100 = 180
}

const x = 10;

/*
  Global env
    Record: {x: 10}
    Parent: null
*/


/*
    Parent: Global env
*/


/*
  Global env
    Record: {x: 10; foo: <function>}
    Parent: null
*/

const y = 30;

/*
  Global env
    Record: {x: 10; foo: <function>; y: 30;}
    Parent: null
*/


console.log(foo(100)); // 180


