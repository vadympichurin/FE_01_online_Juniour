const user = {
    name: "Mango",
    email: "mango@dev",
}

// console.log(user);
// console.log(typeof user);

const strUser = JSON.stringify(user);

// console.log(strUser);
// console.log(typeof strUser);


const parseUser = JSON.parse(strUser);

// console.log(parseUser);
// console.log(typeof parseUser);


// localStorage.setItem('userData', strUser);
// localStorage.setItem('name', 'Poly');

// localStorage.removeItem('userData');


const userFromLocalstorage =  JSON.parse(localStorage.getItem('userData'));

console.log(userFromLocalstorage);

// sessionStorage.setItem('userData', strUser);