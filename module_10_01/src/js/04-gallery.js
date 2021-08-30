import '../css/common.css';
import '../css/gallery.css';
import countries from './countries.json';

import itemsTemplate from '../templates/gallery-items.hbs';


const galleryRef = document.querySelector('.js-gallery');
const markup = itemsTemplate(countries);
galleryRef.insertAdjacentHTML('beforeend', markup);


// countries.map(country => {
//     const markup = itemsTemplate(country);
//     console.log(markup);

//     galleryRef.insertAdjacentHTML('beforeend', markup);
// });


// =================== bad way to render data from BE ========================

// const item = document.createElement('li');

// const countryItem = `<li>
//     <img src="${flag}" alt="${name}"/>
//     <p>Назва: <span>${name}</span></p>
//     <p>Столиця: <span>${capital}</span></p>
// </li>
// `;


// countries.map(item => {
//    return galleryRef.insertAdjacentHTML('beforeend', `<li>
//    <img src="${item.flag}" alt="${item.name}"/>
//    <p>Назва: <span>${item.name}</span></p>
//    <p>Столиця: <span>${item.capital}</span></p>
// </li>
// `)
// })


// galleryRef.insertAdjacentHTML('beforeend', countryItem)

