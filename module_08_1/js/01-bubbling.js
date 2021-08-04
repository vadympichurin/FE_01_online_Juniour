const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
}

const parentClick = (event) => {
    console.log('Click on PARENT');
    console.log('target : ', event.target);
    console.log('currentTarget : ', event.currentTarget);
};

const childClick = (event) => {
    event.stopPropagation();
    console.log('Click on CHILD');
    console.log('target : ', event.target);
    console.log('currentTarget : ', event.currentTarget);
}

const innerChildClick = (event) => {
    console.log('Click on INNER');
    console.log('target : ', event.target);
    console.log('currentTarget : ', event.currentTarget);
};

refs.parent.addEventListener('click', parentClick);
refs.child.addEventListener('click', childClick);
refs.innerChild.addEventListener('click', innerChildClick);