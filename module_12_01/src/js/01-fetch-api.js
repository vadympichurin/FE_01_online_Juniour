/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonTmpl from '../templates/pokemon.hbs';
import getRefs from './getRefs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;

  fetchPokemon(form.elements.query.value)
    .then(renderPokemon)
    .catch(console.log)
    .finally(() => form.reset())
}

function fetchPokemon(pokemonID) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`).then(
    response => {
      return response.json();
    },
  );
}

function renderPokemon(pokemon) {
  const markup = pokemonTmpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

// fetchPokemon(89)
//   .then(renderPokemon)
//   .catch(console.log)
//   .catch(error => console.log(error))
